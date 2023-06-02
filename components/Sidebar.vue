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
</script>

<template>
  <aside class="sticky top-0 w-[7rem] sm:w-[16rem] p-3 h-screen sm:bg-blue-700 group">
    <div class="flex space-x-2 items-center">
      <Bars3Icon class="w-6" />
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        class="hidden sm:block"
      />
    </div>
    <button
      class="flex items-center space-x-2 bg-[#c3e7ff] p-2 sm:p-4 my-2 rounded-md sm:rounded-2xl"
    >
      <PencilIcon class="w-6 text-[#061d47]" />
      <span class="hidden sm:block">Compose</span>
    </button>
    <ul class="my-4 space-y-3 text-center">
      <li>
        <button class="flex items-center space-x-3">
          <InboxIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Inbox</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <StarIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Starred</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <ClockIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Snoozed</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ic:round-send" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Sent</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <DocumentIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Drafts</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <ChevronUpIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Less</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:label-important-outline" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Important</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ic:outline-chat" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Chats</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:schedule-send-outline" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Scheduled</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="mdi:email-multiple-outline" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">All Mail</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ri:spam-2-line" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Spam</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:delete-outline-rounded" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Trash</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:label-outline-rounded" class="w-6 sm:w-4 h-auto" />
          <span class="hidden sm:block">Categories</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Cog6ToothIcon class="w-6 sm:w-4" />
          <span class="hidden sm:block">Manage labels</span>
        </button>
      </li>
    </ul>
  </aside>
</template>
