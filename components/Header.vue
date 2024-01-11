<script setup>
import {
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex justify-between w-full">
    <div
      class="xl:w-[43rem] flex items-center space-x-2 bg-[#eaf1fb] py-1 px-3 rounded-lg"
    >
      <MagnifyingGlassIcon class="w-6" />
      <input
        type="text"
        class="w-[8.5rem] sm:w-full bg-transparent border-0 outline-none focus:ring-0"
        placeholder="Search mail"
      />
      <AdjustmentsHorizontalIcon class="w-6" />
    </div>

    <div class="flex items-center space-x-4">
      <QuestionMarkCircleIcon class="w-6 hidden sm:block" />
      <Cog6ToothIcon class="w-6 hidden sm:block" />
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 hidden sm:block" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        />
      </svg>
      <PopoverMenu />
    </div>
  </div>
</template>
