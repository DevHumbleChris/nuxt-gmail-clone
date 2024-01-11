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
  console.log(isSidebarOpen.value);
};

const composeMail = () => {
  composeStore.composeMail();
};
</script>

<template>
  <aside
    class="top-0 h-screen group"
    :class="
      isSidebarOpen ? 'fixed z-20  drop-shadow-xl' : 'sticky sm:w-[16rem]'
    "
  >
    <div class="flex space-x-2 items-center p-3">
      <Bars3Icon @click="openSidebar" class="w-6 cursor-pointer" />
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
      />
    </div>
    <div class="px-3">
      <button
        @click="composeMail"
        class="flex items-center space-x-2 bg-[#c3e7ff]"
        :class="{
          'p-4 rounded-2xl': isSidebarOpen,
          'p-2 sm:p-4 sm:rounded-2xl rounded-md': !isSidebarOpen,
        }"
      >
        <PencilIcon class="w-6 text-[#061d47]" />
        <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
          >Compose</span
        >
      </button>
    </div>
    <ul class="my-4 space-y-1 text-center">
      <li class="bg-[#d3e3fd] px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <InboxIcon :class="isSidebarOpen ? 'w-6' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Inbox</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <StarIcon :class="isSidebarOpen ? 'w-6' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Starred</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <ClockIcon :class="isSidebarOpen ? 'w-6' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Snoozed</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="ic:round-send"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'">Sent</span>
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <DocumentIcon :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Drafts</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <ChevronUpIcon :class="isSidebarOpen ? 'w-6' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'">Less</span>
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="material-symbols:label-important-outline"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Important</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="ic:outline-chat"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Chats</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="material-symbols:schedule-send-outline"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Scheduled</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="mdi:email-multiple-outline"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >All Mail</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="ri:spam-2-line"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'">Spam</span>
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="material-symbols:delete-outline-rounded"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Trash</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Icon
            name="material-symbols:label-outline-rounded"
            :class="isSidebarOpen ? 'w-6 h-auto' : 'w-6 sm:w-4 h-auto'"
          />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Categories</span
          >
        </button>
      </li>
      <li class="px-5 rounded-r-full">
        <button class="flex items-center space-x-3 py-[0.1rem]">
          <Cog6ToothIcon :class="isSidebarOpen ? 'w-6' : 'w-6 sm:w-4'" />
          <span :class="isSidebarOpen ? 'block' : 'hidden sm:block'"
            >Manage labels</span
          >
        </button>
      </li>
    </ul>
  </aside>
</template>
