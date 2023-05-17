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
  <aside>
    <div class="flex space-x-2 items-center p-3">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7l-5 6.99z"
            />
          </svg>
          <span>Important</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
            />
          </svg>
          <span>Chats</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85l-.7.71z"
            />
            <path
              fill="currentColor"
              d="m11 12l-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75c.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5l6-1.5z"
            />
          </svg>
          <span>Scheduled</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6h2m22-2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4m-2 0l-8 5l-8-5h16m0 12H6V6l8 5l8-5v10Z"
            />
          </svg>
          <span>All Mail</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.935 2.501L21.5 8.066v7.87l-5.565 5.565h-7.87L2.5 15.936v-7.87l5.565-5.565h7.87Zm-.828 2H8.893L4.5 8.894v6.214L8.893 19.5h6.214l4.393-4.393V8.894l-4.393-4.393Zm-4.108 10.5h2v2h-2v-2Zm0-8h2v6h-2V7Z"
            />
          </svg>
          <span>Spam</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
            />
          </svg>
          <span>Trash</span>
        </button>
      </li>
      <li>
        <button class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m21 12l-4.35 6.15q-.275.4-.712.625T15 19H5q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625L21 12Z"
            />
          </svg>
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
