<script setup>
import { InboxIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex w-full justify-between">
    <div
      class="flex w-full space-x-2 xl:space-x-4 bg-[#edf3fd] p-3 items-center"
    >
      <InboxIcon class="w-5 hidden sm:block" />
      <p class="text-sm">Primary</p>
    </div>
    <div class="flex w-full space-x-2 xl:space-x-4 p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 hidden sm:block"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z"
        />
      </svg>
      <p class="text-sm">Promotions</p>
    </div>
    <div class="flex w-full space-x-2 xl:space-x-4 p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 hidden sm:block"
        viewBox="0 0 24 24"
      >
        <g
          id="feUsers0"
          fill="none"
          fill-rule="evenodd"
          stroke="none"
          stroke-width="1"
        >
          <g id="feUsers1" fill="currentColor">
            <path
              id="feUsers2"
              d="M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 2a7.98 7.98 0 0 1 6 2.708V19H2v-1.292A7.98 7.98 0 0 1 8 15Zm8 4v-2.048l-.5-.567a10.057 10.057 0 0 0-1.25-1.193A8.028 8.028 0 0 1 16 15a7.98 7.98 0 0 1 6 2.708V19h-6Z"
            />
          </g>
        </g>
      </svg>
      <p class="text-sm">Social</p>
    </div>
  </div>
</template>
