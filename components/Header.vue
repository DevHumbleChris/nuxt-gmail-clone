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
      class="w-[43rem] flex items-center space-x-2 bg-[#eaf1fb] py-1 px-3 rounded-lg"
    >
      <MagnifyingGlassIcon class="w-6" />
      <input
        type="text"
        class="w-full bg-transparent border-0 outline-none"
        placeholder="Search mail"
      />
      <AdjustmentsHorizontalIcon class="w-6" />
    </div>

    <div class="flex items-center space-x-4">
      <QuestionMarkCircleIcon class="w-6" />
      <Cog6ToothIcon class="w-6" />
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        />
      </svg>
      <img
        src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
        alt="the-coding-montana"
        class="w-6 h-6 object-fit rounded-full"
      />
    </div>
  </div>
</template>
