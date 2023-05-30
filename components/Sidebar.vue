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
  <aside class="sticky top-0 w-[16rem] p-3 h-full">
    <div class="flex space-x-2 items-center">
      <Bars3Icon class="w-6" />
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
      />
    </div>
    <button
      class="flex items-center space-x-2 bg-[#c3e7ff] p-4 my-2 rounded-2xl"
    >
      <PencilIcon class="w-6 text-[#061d47]" />
      <span>Compose</span>
    </button>
    <ul class="my-4 space-y-1">
      <li>
        <button class="flex items-center space-x-3">
          <InboxIcon class="w-4" />
          <span>Inbox</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <StarIcon class="w-4" />
          <span>Starred</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <ClockIcon class="w-4" />
          <span>Snoozed</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ic:round-send" class="w-4 h-auto" />
          <span>Sent</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <DocumentIcon class="w-4" />
          <span>Drafts</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <ChevronUpIcon class="w-4" />
          <span>Less</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:label-important-outline" class="w-4 h-auto" />
          <span>Important</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ic:outline-chat" class="w-4 h-auto" />
          <span>Chats</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:schedule-send-outline" class="w-4 h-auto" />
          <span>Scheduled</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="mdi:email-multiple-outline" class="w-4 h-auto" />
          <span>All Mail</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="ri:spam-2-line" class="w-4 h-auto" />
          <span>Spam</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:delete-outline-rounded" class="w-4 h-auto" />
          <span>Trash</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Icon name="material-symbols:label-outline-rounded" class="w-4 h-auto" />
          <span>Categories</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <Cog6ToothIcon class="w-4" />
          <span>Manage labels</span>
        </button>
      </li>
    </ul>
  </aside>
</template>
