<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { toast } from "vue-sonner";

const headers = useRequestHeaders(["cookie"]);

const composeStore = useComposeStore();

const selectedFile = useState("selectedFile", () => null);
const imgInfo = useState("imgInfo", () => null);
const isUploadingImg = useState("isUploadingImg", () => false);

const isOpen = computed(() => {
  return composeStore?.isAddImage;
});

function closeModal() {
  composeStore?.openAddImageModal();
}

const fetchImage = async (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
    imgInfo.value = e.target.files[0];
  }
  reader.onload = (readerEvent) => {
    selectedFile.value = readerEvent.target.result;
  };
};

const removeImg = () => {
  selectedFile.value = null;
  imgInfo.value = null;
};

const uploadImg = async () => {
  isUploadingImg.value = true;
  const { data: imgData, error: imgError } = await useAsyncData("imgData", () =>
    $fetch("/api/upload/image", {
      headers,
      body: {
        logoURL: selectedFile.value,
      },
      method: "POST",
    })
  );

  if (imgError.value) {
    isUploadingImg.value = false;
    return toast.error(imgError.value.message);
  }

  isUploadingImg.value = false;
  selectedFile.value = null;
  imgInfo.value = null;
  composeStore?.openAddImageModal();
  return toast.success("Image Uploaded");
};
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-center text-gray-900"
              >
                Upload Image
              </DialogTitle>
              <button class="absolute top-3 right-4" @click="closeModal">
                <Icon
                  name="heroicons:x-mark-16-solid"
                  class="w-5 h-auto text-gray-500 dark:text-green-real"
                />
              </button>
              <form @submit.prevent="uploadImg">
                <div v-if="!selectedFile" class="mt-3">
                  <label
                    class="mt-2 cursor-pointer flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5"
                  >
                    <div class="text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div
                        class="mt-4 flex items-center justify-center text-sm leading-6 text-gray-500"
                      >
                        <label
                          for="file-upload"
                          class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                            @change="fetchImage"
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </label>
                </div>
                <div
                  v-else
                  class="mb-2 mt-3 p-3 flex justify-between items-center border shadow-sm rounded-xl"
                >
                  <div class="flex items-center gap-x-3">
                    <span
                      class="w-8 h-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700"
                    >
                      <svg
                        class="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                    </span>
                    <div>
                      <p
                        class="text-sm font-medium text-gray-800 dark:text-white"
                      >
                        {{ imgInfo?.name }}
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-500">
                        {{ imgInfo?.size }} KB
                      </p>
                    </div>
                  </div>
                  <div class="inline-flex items-center gap-x-2">
                    <button
                      @click="removeImg"
                      class="text-red-500 hover:text-red-800"
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
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 gap-2 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <div
                      v-if="isUploadingImg"
                      class="w-5 h-5 rounded-full border-2 border-dashed border-blue-900 animate-spin"
                    ></div>
                    <span class="block">{{
                      isUploadingImg ? "Uploading" : "Upload"
                    }}</span>
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
