<script setup>
import {
  Bars3Icon,
  PencilIcon,
  InboxIcon,
  StarIcon,
  ClockIcon,
  DocumentIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
import { useSidebarStore } from "~/stores/sidebar";
import { useComposeStore } from "~/stores/compose";

const composeStore = useComposeStore();
const sidebarStore = useSidebarStore();
const isSidebarOpen = computed(() => {
  return sidebarStore.isSidebarOpen;
});

const openSidebar = () => {
  sidebarStore.openSidebar();
};

const composeMail = () => {
  composeStore.composeMail();
};
</script>

<template>
  <aside
    class="top-0 h-screen group sticky hidden sm:block"
    :class="isSidebarOpen ? 'w-[4rem]' : 'sm:w-[16rem]'"
  >
    <div class="flex space-x-2 items-center p-4">
      <Bars3Icon
        @click="openSidebar"
        class="w-6 cursor-pointer dark:text-green-real"
      />
      <img
        v-if="!isSidebarOpen"
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
      />
    </div>
    <div class="px-3">
      <button
        @click="composeMail"
        class="flex items-center space-x-2 bg-[#c3e7ff] dark:text-white dark:bg-green-real p-2 sm:p-4 sm:rounded-2xl rounded-md"
      >
        <PencilIcon
          class="text-[#061d47] dark:text-white"
          :class="isSidebarOpen ? 'w-4' : 'w-6'"
        />
        <span :class="{ hidden: isSidebarOpen }">Compose</span>
      </button>
    </div>
    <ul
      class="my-4 text-center"
      :class="isSidebarOpen ? 'space-y-2' : 'space-y-1'"
    >
      <li
        class="bg-[#d3e3fd] px-5 rounded-r-full dark:bg-green-dark-light dark:hover:bg-green-dark-light hover:bg-[#e9ebef] cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <InboxIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Inbox</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <StarIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Starred</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <ClockIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Snoozed</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon name="ic:round-send" class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Sent</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <DocumentIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Drafts</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <ChevronUpIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Less</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:label-important-outline"
            class="h-auto text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Important</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon name="ic:outline-chat" class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Chats</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:schedule-send-outline"
            class="h-auto text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Scheduled</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="mdi:email-multiple-outline"
            class="h-auto text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">All Mail</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon name="ri:spam-2-line" class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Spam</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:delete-outline-rounded"
            class="h-auto text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Trash</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:label-outline-rounded"
            class="h-auto text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Categories</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Cog6ToothIcon class="h-auto text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Manage labels</span>
        </button>
      </li>
    </ul>
  </aside>
</template>
