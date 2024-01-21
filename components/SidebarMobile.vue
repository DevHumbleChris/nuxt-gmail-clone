<script setup>
import { InboxIcon, StarIcon, DocumentIcon } from "@heroicons/vue/24/outline";
import { collection } from "firebase/firestore";

const composeStore = useComposeStore();
const sidebarStore = useSidebarStore();
const activeStore = useActiveStore();

const db = useFirestore();
const user = useCurrentUser();
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

const activeRoute = computed(() => {
  return activeStore?.activeRoute;
});

const composeMail = () => {
  composeStore.composeMail();
  sidebarStore?.openLeftSidebarMenu();
};

const isLeftSidebarMenuOpen = computed(() => {
  return sidebarStore?.isLeftSidebarMenuOpen;
});

const closeLeftSidebarMenu = () => {
  sidebarStore?.openLeftSidebarMenu();
};
</script>

<template>
  <aside
    v-show="isLeftSidebarMenuOpen"
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :enter="{ opacity: 1, x: 0 }"
    :delay="200"
    :leave="{ opacity: 0, x: -100 }"
    class="fixed shrink-0 top-0 left-0 w-[15rem] pr-3 bg-[#f7f8fc] dark:bg-green-dark h-screen py-3 rounded-r-2xl shadow-xl shadow-gray-800/10 dark:shadow-gray-300/10 group"
  >
    <Icon
      @click="closeLeftSidebarMenu"
      name="heroicons:x-mark-16-solid"
      class="absolute top-4 right-4 w-6 h-auto text-gray-600 cursor-pointer dark:text-green-real"
    />
    <div class="flex space-x-2 items-center p-4">
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
      />
    </div>
    <div class="px-3">
      <button
        @click="composeMail"
        class="flex items-center space-x-2 bg-[#c3e7ff] dark:text-white dark:bg-green-real p-4 rounded-2xl"
      >
        <Icon
          name="heroicons:pencil-solid"
          class="w-6 text-[#061d47] dark:text-white"
        />
        <span>Compose</span>
      </button>
    </div>
    <ul class="my-4 text-center space-y-1">
      <li
        @click="closeLeftSidebarMenu"
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
            <span>Inbox</span>
          </div>
          <p class="text-xs" v-if="noOfInboxMessagesUnread > 0">
            {{ noOfInboxMessagesUnread }}
          </p>
        </NuxtLink>
      </li>
      <li
        @click="closeLeftSidebarMenu"
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
            <span>Starred</span>
          </div>
          <p class="text-xs" v-if="noOfStarredMessages > 0">
            {{ noOfStarredMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="heroicons:clock"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Snoozed</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
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
          <span>Sent</span>
        </NuxtLink>
      </li>
      <li
        @click="closeLeftSidebarMenu"
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
          <span>Drafts</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="heroicons:chevron-up"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Less</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
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
            <span>Important</span>
          </div>
          <p class="text-xs" v-if="noOfImportantMessages > 0">
            {{ noOfImportantMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="ic:outline-chat"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Chats</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:schedule-send-outline"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Scheduled</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="mdi:email-multiple-outline"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>All Mail</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="ri:spam-2-line"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Spam</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
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
            <span>Trash</span>
          </div>
          <p class="text-xs" v-if="noOfTrashedMessages > 0">
            {{ noOfTrashedMessages }}
          </p>
        </NuxtLink>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="material-symbols:label-outline-rounded"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Categories</span>
        </button>
      </li>
      <li
        @click="closeLeftSidebarMenu"
        class="px-5 rounded-r-full hover:bg-[#e9ebef] dark:hover:bg-green-dark-light cursor-pointer"
      >
        <button
          class="flex items-center space-x-3 py-[0.1rem] dark:text-green-real"
        >
          <Icon
            name="heroicons:cog-6-tooth"
            class="h-auto dark:text-green-real text-[#444746] w-5"
          />
          <span>Manage labels</span>
        </button>
      </li>
    </ul>
  </aside>
</template>
