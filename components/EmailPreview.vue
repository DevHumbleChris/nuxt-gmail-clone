<script setup>
import { formatDistance, formatRelative } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
const props = defineProps({
  mail: Object,
});

const mail = computed(() => {
  return props?.mail;
});

const formatDateWithDateFNS = (date) => {
  let dateToConvert = date ? date.toDate() : new Date();
  return formatRelative(dateToConvert, new Date());
};
</script>

<template>
  <div class="w-full">
    <div class="px-[68px] py-4 flex items-center gap-3">
      <h1 class="text-3xl text-gray-600 font-medium">{{ mail?.subject }}</h1>
      <Icon
        name="material-symbols:label-important-outline"
        class="w-5 h-auto text-gray-400"
      />
    </div>
    <div class="px-5 flex items-center justify-between">
      <div class="flex gap-3">
        <img
          src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
          alt="the-coding-montana"
          class="w-10 h-10 object-fit rounded-full"
        />
        <div>
          <div class="text-sm flex items-center gap-1">
            <h2 class="font-semibold">{{ mail?.senderName }}</h2>
            <p class="text-xs text-gray-600 font-medium">
              &lt;{{ mail?.sender }}&gt;
            </p>
          </div>
          <div class="flex items-center gap-1 text-sm text-gray-500">
            <p>to me</p>
            <HoverCard>
              <HoverCardTrigger
                ><Icon
                  name="material-symbols:arrow-drop-down"
                  class="w-5 h-auto cursor-pointer"
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
      <div>
        <div class="text-[13px] flex items-center gap-6 text-gray-600">
          <p>{{ formatDateWithDateFNS(mail?.timestamp) }}</p>
          <Icon
            name="material-symbols:star-outline-rounded"
            class="w-5 h-auto"
          />
          <div class="flex items-center gap-5">
            <Icon
              name="fluent:emoji-smile-slight-24-regular"
              class="w-5 h-auto"
            />
            <Icon name="material-symbols:reply" class="w-5 h-auto" />
            <Icon name="uil:ellipsis-v" class="w-5 h-auto" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-[70px] text-sm my-4">
      <div v-html="mail?.body"></div>
    </div>

    <div class="my-5 px-5 flex items-center gap-5">
      <button
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

    <div class="px-5 mt-10 mb-4 flex gap-2 w-full">
      <img
        src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
        alt="the-coding-montana"
        class="w-10 h-10 object-fit rounded-full"
      />
      <div
        class="w-full bg-white px-5 py-2 border shadow rounded-xl drop-shadow-md"
      >
        <div class="space-y-4">
          <div class="flex items-center gap-4 text-gray-600">
            <div class="flex items-center">
              <button class="block">
                <Icon name="material-symbols:reply" class="w-5 h-auto" />
              </button>
              <button class="block">
                <Icon
                  name="material-symbols:arrow-drop-down"
                  class="w-5 h-auto"
                />
              </button>
            </div>
            <p class="text-sm font-medium">totaljobs@totaljobsmail.com</p>
          </div>
          <div class="text-sm text-gray-600 h-[7rem]">Write something</div>
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
