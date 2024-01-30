<script setup>
import { formatRelative } from "date-fns";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Link from "@tiptap/extension-link";
import Blockquote from "@tiptap/extension-blockquote";
import { toast } from "vue-sonner";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

const props = defineProps({
  mail: Object,
});
const db = useFirestore();
const user = useCurrentUser();
const composeStore = useComposeStore();

const editor = useState("editor", () => null);
const content = ref("");

const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [
      Placeholder.configure({
        placeholder: "Write something …",
        emptyNodeClass: "text-gray-600 dark:text-gray-400",
      }),
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          class: "text-gray-600 dark:text-gray-400",
        },
      }),
      Bold.configure({
        HTMLAttributes: {
          class: "font-bold",
        },
      }),
      Underline,
      Link.configure({
        HTMLAttributes: {
          class:
            "inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-white",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-inside text-gray-800 dark:text-white",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-inside text-gray-800 dark:text-white",
        },
      }),
      ListItem,
      Blockquote.configure({
        HTMLAttributes: {
          class: "text-gray-800 sm:text-xl dark:text-white",
        },
      }),
      TextAlign,
      Image.configure({
        HTMLAttributes: {
          class: "max-w-[10rem] max-h-[10rem] object-cover",
        },
      }),
    ],
    onUpdate: () => {
      // HTML
      emit("update:modelValue", editor.value.getHTML());

      // JSON
      // emit('update:modelValue', editor.getJSON())
    },
  });
});

const isReply = useState("isReply", () => false);

const mail = computed(() => {
  return props?.mail;
});

const formatDateWithDateFNS = (date) => {
  let dateToConvert = date ? date.toDate() : new Date();
  return formatRelative(dateToConvert, new Date());
};

onBeforeMount(async () => {
  const inboxDocRef = doc(
    db,
    "users",
    user.value.email,
    "inbox",
    mail?.value?.id
  );

  await updateDoc(inboxDocRef, {
    read: true,
  });
});

const replyMail = () => {
  isReply.value = !isReply.value;
};

const setBold = () => {
  editor.value.chain().focus().toggleBold().run();
};

const setStrikethrough = () => {
  editor.value.chain().focus().toggleStrike().run();
};

const toggleItalic = () => {
  editor.value.chain().focus().toggleItalic().run();
};

const toggleUnderline = () => {
  editor.value.chain().focus().toggleUnderline().run();
};

const toggleBulletList = () => {
  editor.value.chain().focus().toggleBulletList().run();
};

const toggleOrderedList = () => {
  editor.value.chain().focus().toggleOrderedList().run();
};

onBeforeUnmount(() => {
  editor.value.destroy();
});

const uploadedImgUrl = computed(() => {
  return composeStore?.uploadedImgUrl;
});

const addImage = () => {
  composeStore?.openAddImageModal();
};

watchEffect(() => {
  if (uploadedImgUrl.value) {
    editor.value.chain().focus().setImage({ src: uploadedImgUrl.value }).run();
    composeStore?.setUploadedImgUrl("");
  }
});

const addLink = () => {
  composeStore?.openAddLinkModal();
};

const sendMail = async () => {
  try {
    const emailData = {
      body: editor.value.getHTML(),
      repliedAt: new Date(),
    };

    const inboxDocRef = doc(
      db,
      "users",
      user.value.email,
      "inbox",
      props?.mail?.id
    );
    const sentDocRef = doc(
      db,
      "users",
      user.value.email,
      "inbox",
      props?.mail?.id
    );

    await updateDoc(inboxDocRef, {
      replies: arrayUnion(emailData),
    });

    await updateDoc(sentDocRef, {
      replies: arrayUnion(emailData),
    });

    replyMail();
    toast.success("Mail Replied Successful!");
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <div class="w-full">
    <div class="p-5 sm:px-[68px] py-4 flex items-center gap-3">
      <h1 class="text-3xl text-gray-600 font-medium dark:text-green-real">
        {{ mail?.subject }}
      </h1>
      <Icon
        name="material-symbols:label-important-outline"
        class="w-5 h-auto text-gray-400 dark:text-green-real"
      />
    </div>
    <div>
      <div
        class="px-5 flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center justify-between"
      >
        <div class="flex gap-3">
          <img
            src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
            alt="the-coding-montana"
            class="w-10 h-10 object-fit rounded-full"
          />
          <div>
            <div
              class="text-sm flex flex-col sm:flex-row sm:items-center gap-1"
            >
              <h2 class="font-semibold">{{ mail?.senderName }}</h2>
              <p class="text-xs text-gray-600 font-medium dark:text-green-real">
                &lt;{{ mail?.sender }}&gt;
              </p>
            </div>
            <div class="flex items-center gap-1 text-sm text-gray-500">
              <p class="dark:text-green-real">to me</p>
              <HoverCard>
                <HoverCardTrigger
                  ><Icon
                    name="material-symbols:arrow-drop-down"
                    class="w-5 h-auto cursor-pointer dark:text-green-real"
                /></HoverCardTrigger>
                <HoverCardContent class="w-[22rem] text-sm">
                  <div>
                    <p class="flex gap-2">
                      <span class="block text-gray-500">from:</span>
                      <span class="block text-gray-600 font-semibold">{{
                        mail?.sender
                      }}</span>
                    </p>
                    <p class="flex gap-2">
                      <span class="block text-gray-500">to:</span>
                      <span class="block text-gray-600 font-semibold">{{
                        mail?.recipient
                      }}</span>
                    </p>
                    <p class="flex gap-2">
                      <span class="block text-gray-500">date:</span>
                      <span class="block text-gray-600 font-semibold">{{
                        formatDateWithDateFNS(mail?.timestamp)
                      }}</span>
                    </p>
                    <p class="flex gap-2">
                      <span class="block text-gray-500">subject:</span>
                      <span class="block text-gray-600 font-semibold">{{
                        mail?.subject
                      }}</span>
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
        <div class="text-[13px] flex items-center gap-6 text-gray-600">
          <p class="dark:text-green-real">
            {{ formatDateWithDateFNS(mail?.timestamp) }}
          </p>
          <Icon
            name="material-symbols:star-outline-rounded"
            class="w-5 h-auto dark:text-green-real"
          />
          <div class="flex items-center gap-5">
            <Icon
              name="fluent:emoji-smile-slight-24-regular"
              class="w-5 h-auto dark:text-green-real"
            />
            <Icon
              name="material-symbols:reply"
              class="w-5 h-auto dark:text-green-real"
            />
            <Icon
              name="uil:ellipsis-v"
              class="w-5 h-auto dark:text-green-real"
            />
          </div>
        </div>
      </div>
      <div class="px-5 sm:px-[70px] text-lg my-4 dark:text-gray-100">
        <div v-html="mail?.body"></div>
      </div>
    </div>

    <div
      v-for="(reply, index) in mail?.replies"
      :key="index"
      class="px-5 sm:px-[70px] space-y-1 my-3"
    >
      <p class="dark:text-green-real text-sm">
        <span class="dark:text-gray-200">- Replied: </span
        >{{ formatDateWithDateFNS(mail?.repliedAt) }}
      </p>
      <div
        class="border-l dark:border-gray-500 px-3 text-lg dark:text-gray-100"
      >
        <div v-html="reply?.body"></div>
      </div>
    </div>

    <div v-if="!isReply" class="my-5 px-5 flex items-center gap-5">
      <button
        @click="replyMail"
        class="flex items-center text-sm text-gray-600 gap-3 border px-4 py-2 rounded-full border-gray-500 hover:bg-[#f8f8f8]"
      >
        <Icon name="solar:reply-outline" class="w-5 h-auto" />
        <span>Reply</span>
      </button>
      <button
        class="flex items-center text-sm text-gray-600 gap-3 border px-4 py-2 rounded-full border-gray-500 hover:bg-[#f8f8f8]"
      >
        <Icon name="solar:forward-outline" class="w-5 h-auto" />
        <span>Forward</span>
      </button>
    </div>

    <div v-else class="px-5 mt-3 sm:mt-10 mb-4 flex sm:gap-2 w-full">
      <img
        src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
        alt="the-coding-montana"
        class="w-10 h-10 object-fit rounded-full hidden sm:block"
      />
      <div
        class="w-full bg-white dark:bg-green-dark px-5 py-2 border shadow rounded-xl drop-shadow-md"
      >
        <div class="space-y-4">
          <div class="flex items-center gap-4 text-gray-600">
            <div class="flex items-center">
              <button class="block">
                <Icon
                  name="material-symbols:reply"
                  class="w-5 h-auto dark:text-green-real"
                />
              </button>
              <button class="block">
                <Icon
                  name="material-symbols:arrow-drop-down"
                  class="w-5 h-auto dark:text-green-real"
                />
              </button>
            </div>
            <p class="text-sm font-medium dark:text-green-real">
              {{ mail?.sender }}
            </p>
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300 h-[7rem]">
            <EditorContent
              :editor="editor"
              v-model="content"
              data-hs-editor-field
            />
          </div>
        </div>
        <div class="w-full py-2">
          <div class="rounded-lg overflow-hidden">
            <div>
              <div class="flex align-middle gap-x-0.5 p-2">
                <button
                  @click="setBold"
                  data-hs-editor-bold
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                    <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
                  </svg>
                </button>
                <button
                  @click="toggleItalic"
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-italic
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="19" x2="10" y1="4" y2="4" />
                    <line x1="14" x2="5" y1="20" y2="20" />
                    <line x1="15" x2="9" y1="4" y2="20" />
                  </svg>
                </button>
                <button
                  @click="toggleUnderline"
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-underline
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                    <line x1="4" x2="20" y1="20" y2="20" />
                  </svg>
                </button>
                <button
                  @click="setStrikethrough"
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-strike
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                    <path d="M14 12a4 4 0 0 1 0 8H6" />
                    <line x1="4" x2="20" y1="12" y2="12" />
                  </svg>
                </button>
                <button
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-link
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    />
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    />
                  </svg>
                </button>
                <button
                  @click="toggleOrderedList"
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-ol
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="10" x2="21" y1="6" y2="6" />
                    <line x1="10" x2="21" y1="12" y2="12" />
                    <line x1="10" x2="21" y1="18" y2="18" />
                    <path d="M4 6h1v4" />
                    <path d="M4 10h2" />
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                  </svg>
                </button>
                <button
                  @click="toggleBulletList"
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-ul
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="8" x2="21" y1="6" y2="6" />
                    <line x1="8" x2="21" y1="12" y2="12" />
                    <line x1="8" x2="21" y1="18" y2="18" />
                    <line x1="3" x2="3.01" y1="6" y2="6" />
                    <line x1="3" x2="3.01" y1="12" y2="12" />
                    <line x1="3" x2="3.01" y1="18" y2="18" />
                  </svg>
                </button>
                <button
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-code
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center px-2 justify-between">
            <div class="flex items-center">
              <button
                @click="sendMail"
                class="block bg-[#0b57cf] dark:bg-green-real px-3 py-2 rounded-full sm:px-6 text-white"
              >
                Send
              </button>
              <div class="space-x-2 dark:text-green-real">
                <button>
                  <Icon name="mdi:paperclip" class="w-5 h-auto" />
                </button>
                <button @click="addLink">
                  <Icon name="ic:outline-insert-link" class="w-5 h-auto" />
                </button>
                <button @click="addImage">
                  <Icon
                    name="material-symbols:image-outline-rounded"
                    class="w-5 h-auto"
                  />
                </button>
              </div>
            </div>
            <button class="block">
              <Icon
                name="basil:trash-outline"
                class="w-5 h-auto text-red-600"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
