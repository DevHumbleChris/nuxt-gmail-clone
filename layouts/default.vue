<script setup>
import {
  ClockIcon,
  EnvelopeIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <main class="flex">
    <Sidebar />
    <section class="w-full p-2.5">
      <Header />
      <div class="my-2 p-1.5 flex space-x-2">
        <div class="w-full bg-white rounded-2xl">
          <div class="flex items-center space-x-6 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.08 8.08 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.08 8.08 0 0 0-.84-3.58ZM60.94 48h134.12l8 16H52.94ZM208 208H48V80h160v128Zm-42.34-61.66a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.935 2.501L21.5 8.066v7.87l-5.565 5.565h-7.87L2.5 15.936v-7.87l5.565-5.565h7.87Zm-.828 2H8.893L4.5 8.894v6.214L8.893 19.5h6.214l4.393-4.393V8.894l-4.393-4.393Zm-4.108 10.5h2v2h-2v-2Zm0-8h2v6h-2V7Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
              />
            </svg>
            <ClockIcon class="w-5" />
            <EnvelopeIcon class="w-5" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12.2 14l-.925.925q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275L15.3 13.7q.3-.3.3-.7t-.3-.7l-2.625-2.625q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L12.2 12H9q-.425 0-.713.288T8 13q0 .425.288.713T9 14h3.2ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"
              />
            </svg>
            <EllipsisVerticalIcon class="w-5" />
          </div>
          <slot />
        </div>
        <div class="space-y-6">
          <img
            src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
            class="w-8"
            alt="google_calendar"
          />
          <img
            src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
            class="w-8"
            alt="google_keep"
          />
          <img
            src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
            class="w-8"
            alt="google_tasks"
          />
          <img
            src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
            class="w-8"
            alt="google_contacts"
          />
        </div>
      </div>
    </section>
  </main>
</template>
