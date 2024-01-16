<script setup>
import { useComposeStore } from "~/stores/compose";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Strike from "@tiptap/extension-strike";

const editor = useState("editor", () => null);

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [StarterKit, Bold, Strike],
  });
});

const composeStore = useComposeStore();

const isSetCarbonCopy = computed(() => {
  return composeStore?.isSetCarbonCopy;
});
const isSetBlindCarbonCopy = computed(() => {
  return composeStore?.isSetBlindCarbonCopy;
});

const isMinimize = computed(() => {
  return composeStore?.isMinimize;
});

const isMaximize = computed(() => {
  return composeStore?.isMaximize;
});

const isFullWidth = computed(() => {
  return composeStore?.isFullWidth;
});

const isComposingMail = computed(() => {
  return composeStore?.isComposingMail;
});

const minimize = () => {
  composeStore?.minimize();
};

const composeMail = () => {
  composeStore.composeMail();
};

const fullWidth = () => {
  composeStore?.fullWidth();
};

const setCarbonCopy = () => {
  composeStore?.setCarbonCopy();
};

const setBlindCarbonCopy = () => {
  composeStore?.setBlindCarbonCopy();
};

const handleComposeMail = async () => {};

const setBold = () => {
  editor.value.chain().focus().toggleBold().run();
};

const setStrikethrough = () => {
  editor.value.chain().focus().toggleStrike().run();
};

const toggleItalic = () => {
  editor.value.chain().focus().toggleItalic().run();
};
</script>

<template>
  <div v-if="isComposingMail">
    <div
      v-if="!isMinimize"
      class="fixed inset-0 bg-background/10 backdrop-blur-sm"
    />
    <div
      class="fixed bottom-0 right-0 drop-shadow-2xl sm:right-16 text-sm shadow-lg shadow-cyan-500/200 rounded-t-lg z-30 overflow-hidden"
      :class="{
        'sm:w-[17rem] w-full bottom-0 h-[2.5rem]': isMinimize,
        'w-full sm:w-[30rem] h-[30rem]': isMaximize,
        'bottom-28 sm:right-48 sm:w-[52rem]': isFullWidth,
        'w-full sm:w-[30rem] h-[30rem]': !isMinimize,
      }"
    >
      <div
        class="bg-[#f2f5fc] dark:bg-green-dark-light p-3 flex items-center justify-between dark:border-b dark:border-gray-600/50"
      >
        <p class="text-[#172846] dark:text-green-real">New Message</p>
        <div class="flex items-center space-x-2">
          <button @click="minimize" class="cursor-pointer dark:text-green-real">
            <Icon name="codicon:chrome-minimize" class="w-5 h-auto" />
          </button>
          <button
            @click="fullWidth"
            class="cursor-pointer dark:text-green-real"
          >
            <Icon name="ic:outline-open-in-full" class="w-4 h-auto" />
          </button>
          <button
            @click="composeMail"
            class="cursor-pointer dark:text-green-real"
          >
            <Icon name="ic:round-close" class="w-4 h-auto" />
          </button>
        </div>
      </div>
      <form
        @submit.prevent="handleComposeMail"
        class="relative dark:bg-green-dark-light bg-white"
        :class="{
          'h-full w-full': !isMinimize,
          hidden: isMinimize,
        }"
      >
        <div
          class="flex px-3 relative items-center justify-between border-b border-gray-200 group dark:border-gray-600/50"
        >
          <p class="group-hover:block hidden dark:text-green-real">To</p>
          <input
            type="text"
            class="w-full text-sm outline-none border-0 focus:ring-0 bg-transparent group-hover:ml-0 -ml-2 group-hover:placeholder:text-transparent dark:placeholder:text-green-real dark:text-white"
            placeholder="Recipient"
          />
          <div
            v-if="!isSetCarbonCopy"
            class="group-hover:flex flex items-center space-x-2"
          >
            <button
              v-if="!isSetCarbonCopy"
              @click="setCarbonCopy"
              class="hover:underline dark:text-green-real"
            >
              Cc
            </button>
            <button
              v-if="!isSetBlindCarbonCopy"
              @click="setBlindCarbonCopy"
              class="hover:underline dark:text-green-real"
            >
              Bcc
            </button>
          </div>
        </div>
        <div>
          <div
            v-if="isSetCarbonCopy"
            class="flex items-center px-3 justify-between border-b border-gray-200 dark:border-gray-600/50"
          >
            <p class="dark:text-green-real">Cc</p>
            <input
              type="text"
              class="w-full outline-none border-0 focus:ring-0 bg-transparent dark:text-white"
            />
            <div v-if="isSetCarbonCopy" class="flex items-center space-x-2">
              <button
                v-if="!isSetBlindCarbonCopy"
                @click="setBlindCarbonCopy"
                class="hover:underline dark:text-green-real"
              >
                Bcc
              </button>
            </div>
          </div>
          <div
            v-if="isSetBlindCarbonCopy"
            class="flex items-center px-3 justify-between border-b border-gray-200 dark:border-gray-600/50"
          >
            <p class="dark:text-green-real">Bcc</p>
            <input
              type="text"
              class="w-full outline-none border-0 focus:ring-0 bg-transparent dark:text-white"
            />
          </div>
        </div>
        <div
          class="flex items-center px-3 justify-between border-b border-gray-200 dark:border-gray-600/50"
        >
          <input
            type="text"
            class="-ml-2 w-full outline-none border-0 focus:ring-0 bg-transparent dark:placeholder:text-green-real dark:text-white"
            placeholder="Subject"
          />
        </div>
        <div
          class="h-[16rem] overflow-hidden px-3 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        >
          <client-only>
            <EditorContent :editor="editor" data-hs-editor-field />
          </client-only>
        </div>

        <!-- Compose Buttons -->
        <div
          class="bg-white dark:bg-green-dark-light absolute bottom-12 bg-transparent w-full py-2"
        >
          <div class="rounded-lg overflow-hidden">
            <div>
              <div class="flex align-middle gap-x-0.5 p-2">
                <button
                  @click="setBold"
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

                <button
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-code
                >
                  <Icon
                    name="icon-park-outline:left-alignment"
                    class="flex-shrink-0 w-4 h-4"
                  />
                </button>
                <button
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:text-green-real"
                  type="button"
                  data-hs-editor-code
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4 dark:text-green-real"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L21 10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 18L21 18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 14H21"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center px-2 justify-between">
            <div class="flex items-center">
              <button
                class="block bg-[#0b57cf] dark:bg-green-real px-3 py-2 rounded-full sm:px-6 text-white"
              >
                Send
              </button>
              <div class="space-x-2 dark:text-green-real">
                <button>
                  <Icon name="mdi:paperclip" class="w-5 h-auto" />
                </button>
                <button>
                  <Icon name="ic:outline-insert-link" class="w-5 h-auto" />
                </button>
                <button>
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
      </form>
    </div>
  </div>
</template>

<style scope>
.ProseMirror:focus {
  outline: none;
}

.tiptap ul p,
.tiptap ol p {
  display: inline;
}

.tiptap p.is-editor-empty:first-child::before {
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
