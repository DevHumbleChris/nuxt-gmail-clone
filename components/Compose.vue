<script setup>
import { useComposeStore } from "~/stores/compose";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useState("editor", () => null);

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [StarterKit],
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

const maximize = () => {
  composeStore?.maximize();
};

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
</script>

<template>
  <div
    v-if="isComposingMail"
    class="fixed right-0 w-full sm:w-[30rem] h-[30rem] drop-shadow-2xl sm:right-16 text-sm shadow-lg shadow-cyan-500/200 rounded-t-lg z-30 overflow-hidden"
    :class="{
      'w-[17rem] bottom-0 h-[2.5rem]': isMinimize,
      'w-[30rem] h-[30rem]': isMaximize,
      'bottom-28 sm:right-48 sm:w-[52rem]': isFullWidth,
    }"
  >
    <div class="bg-[#f2f5fc] p-3 flex items-center justify-between">
      <p class="text-[#172846]">New Message</p>
      <div class="flex items-center space-x-2">
        <button @click="minimize" class="cursor-pointer">
          <Icon name="codicon:chrome-minimize" class="w-5 h-auto" />
        </button>
        <button @click="fullWidth" class="cursor-pointer">
          <Icon name="ic:outline-open-in-full" class="w-4 h-auto" />
        </button>
        <button @click="composeMail" class="cursor-pointer">
          <Icon name="ic:round-close" class="w-4 h-auto" />
        </button>
      </div>
    </div>
    <form
      @submit.prevent="handleComposeMail"
      class="relative"
      :class="{
        'bg-white h-full w-full px-3': !isMinimize,
        hidden: isMinimize,
      }"
    >
      <div
        class="flex items-center justify-between border-b border-gray-200 group"
      >
        <p class="group-hover:block hidden">To</p>
        <input
          type="text"
          class="w-full text-sm outline-none border-0 focus:ring-0 bg-transparent group-hover:ml-0 -ml-2 group-hover:placeholder:text-transparent"
          placeholder="Recipient"
        />
        <div
          v-if="!isSetCarbonCopy"
          class="group-hover:flex flex items-center space-x-2"
        >
          <button
            v-if="!isSetCarbonCopy"
            @click="setCarbonCopy"
            class="hover:underline"
          >
            Cc
          </button>
          <button
            v-if="!isSetBlindCarbonCopy"
            @click="setBlindCarbonCopy"
            class="hover:underline"
          >
            Bcc
          </button>
        </div>
      </div>
      <div>
        <div
          v-if="isSetCarbonCopy"
          class="flex items-center justify-between border-b border-gray-200"
        >
          <p>Cc</p>
          <input
            type="text"
            class="w-full outline-none border-0 focus:ring-0 bg-transparent"
          />
          <div v-if="isSetCarbonCopy" class="flex items-center space-x-2">
            <button
              v-if="!isSetBlindCarbonCopy"
              @click="setBlindCarbonCopy"
              class="hover:underline"
            >
              Bcc
            </button>
          </div>
        </div>
        <div
          v-if="isSetBlindCarbonCopy"
          class="flex items-center justify-between border-b border-gray-200"
        >
          <p>Bcc</p>
          <input
            type="text"
            class="w-full outline-none border-0 focus:ring-0 bg-transparent"
          />
        </div>
      </div>
      <div class="flex items-center justify-between border-b border-gray-200">
        <input
          type="text"
          class="-ml-2 w-full outline-none border-0 focus:ring-0 bg-transparent"
          placeholder="Subject"
        />
      </div>
      <div
        class="w-full h-[19rem] overflow-hidden overflow-y-scroll scrollbar-hide"
      >
        <EditorContent :editor="editor" class="border-transparent ring-0" />
      </div>

      <!-- Compose Buttons -->
      <div
        class="absolute w-[20rem] sm:w-[29rem] bottom-12 py-2 flex items-center justify-between space-x-2"
      >
        <div class="flex items-center space-x-3">
          <button
            class="block bg-[#0b57cf] px-3 py-2 rounded-full sm:px-6 text-white"
          >
            Send
          </button>
          <div class="space-x-2">
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
          <Icon name="basil:trash-outline" class="w-5 h-auto text-red-600" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.ProseMirror {
  outline: none;
}
</style>
