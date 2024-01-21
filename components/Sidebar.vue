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
import { useActiveStore } from "~/stores/active";
import { collection } from "firebase/firestore";

const composeStore = useComposeStore();
const sidebarStore = useSidebarStore();
const db = useFirestore();
const user = useCurrentUser();
const activeStore = useActiveStore();

const activeRoute = computed(() => {
  return activeStore?.activeRoute;
});

const isSidebarOpen = computed(() => {
  return sidebarStore.isSidebarOpen;
});

const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));

const noOfInboxMessagesUnread = computed(() => {
  const unTrashedMessages = inbox.value.filter((mail) => !mail.trashed);
  return unTrashedMessages.length;
});

const noOfStarredMessages = computed(() => {
  const noOfStarredMsg = inbox.value.filter((mail) => mail.starred);
  return noOfStarredMsg.length;
});

const noOfTrashedMessages = computed(() => {
  const noOfTrashesMsg = inbox.value.filter((mail) => mail.trashed);
  return noOfTrashesMsg.length;
});

const noOfImportantMessages = computed(() => {
  const noOfImportantMsg = inbox.value.filter((mail) => mail.important);
  return noOfImportantMsg.length;
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
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :enter="{ opacity: 1, x: 0 }"
    :delay="200"
    :leave="{ opacity: 0, x: -100 }"
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
        class="px-5 rounded-r-full dark:hover:bg-green-dark-light hover:bg-[#e9ebef] cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'inbox',
        }"
      >
        <NuxtLink
          to="/inbox"
          class="flex items-center w-full justify-between py-[0.1rem] dark:text-green-real"
        >
          <div class="flex items-center space-x-3">
            <InboxIcon class="h-auto text-[#444746] dark:text-green-real w-5" />
            <span :class="{ hidden: isSidebarOpen }">Inbox</span>
          </div>
          <p class="text-xs" v-if="noOfInboxMessagesUnread > 0">
            {{ noOfInboxMessagesUnread }}
          </p>
        </NuxtLink>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'starred',
        }"
      >
        <NuxtLink
          to="/starred"
          class="flex items-center w-full justify-between space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <div class="flex items-center space-x-3">
            <StarIcon class="h-auto dark:text-green-real text-[#444746] w-5" />
            <span :class="{ hidden: isSidebarOpen }">Starred</span>
          </div>
          <p class="text-xs" v-if="noOfStarredMessages > 0">
            {{ noOfStarredMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'snoozed',
        }"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <ClockIcon class="h-auto dark:text-green-real text-[#444746] w-5" />
          <span :class="{ hidden: isSidebarOpen }">Snoozed</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'sent',
        }"
      >
        <NuxtLink
          to="/sent"
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="ic:round-send"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Sent</span>
        </NuxtLink>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'drafts',
        }"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <DocumentIcon
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Drafts</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <ChevronUpIcon
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Less</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'important',
        }"
      >
        <NuxtLink
          to="/important"
          class="flex items-center w-full justify-between space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <div class="flex items-center space-x-3">
            <Icon
              name="material-symbols:label-important-outline"
              class="h-auto dark:text-green-real text-[#444746] w-5"
            />
            <span :class="{ hidden: isSidebarOpen }">Important</span>
          </div>
          <p class="text-xs" v-if="noOfImportantMessages > 0">
            {{ noOfImportantMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="ic:outline-chat"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
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
            class="h-auto dark:text-green-real text-[#444746] w-5"
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
            class="h-auto dark:text-green-real text-[#444746] w-5"
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
          <Icon
            name="ri:spam-2-line"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Spam</span>
        </button>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
        :class="{
          'bg-[#d3e3fd] dark:bg-green-dark-light': activeRoute === 'trashed',
        }"
      >
        <NuxtLink
          to="/trashed"
          class="flex items-center w-full justify-between space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <div class="flex items-center space-x-3">
            <Icon
              name="material-symbols:delete-outline-rounded"
              class="h-auto dark:text-green-real text-[#444746] w-5"
            />
            <span :class="{ hidden: isSidebarOpen }">Trash</span>
          </div>
          <p class="text-xs" v-if="noOfTrashedMessages > 0">
            {{ noOfTrashedMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:label-outline-rounded"
            class="h-auto dark:text-green-real text-[#444746] w-5"
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
          <Cog6ToothIcon
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span :class="{ hidden: isSidebarOpen }">Manage labels</span>
        </button>
      </li>
    </ul>
  </aside>
</template>
