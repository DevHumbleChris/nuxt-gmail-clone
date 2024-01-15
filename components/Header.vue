<script setup lang="ts">
import {
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/solid";
import { Button } from "~/components/ui/button";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleMode = useToggle(isDark);
</script>

<template>
  <div class="flex justify-between w-full">
    <div class="flex items-center gap-2">
      <Bars3Icon
        class="w-6 block sm:hidden cursor-pointer dark:text-green-real"
      />
      <div
        class="xl:w-[43rem] bg-[#eaf1fb] dark:bg-green-dark-light flex items-center space-x-2 py-1 px-3 rounded-full"
      >
        <MagnifyingGlassIcon class="w-6 dark:text-green-real" />
        <input
          type="text"
          class="w-[8.5rem] sm:w-full bg-transparent border-0 outline-none focus:ring-0"
          placeholder="Search mail"
        />
        <AdjustmentsHorizontalIcon class="w-6 dark:text-green-real" />
      </div>
    </div>

    <div class="flex items-center space-x-4 dark:text-green-real">
      <Button
        @click="toggleMode()"
        class="bg-transparent border-0 hover:bg-transparent dark:text-green-real"
        variant="outline"
        size="icon"
      >
        <Icon
          v-if="isDark"
          name="ph:moon-stars-bold"
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-green-real"
        />
        <Icon
          v-else
          name="material-symbols:wb-sunny-outline-rounded"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-green-real"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
      <QuestionMarkCircleIcon
        class="w-6 hidden sm:block dark:text-green-real"
      />
      <Cog6ToothIcon class="w-6 hidden sm:block dark:text-green-real" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 hidden sm:block dark:text-green-real"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        />
      </svg>
      <Cog6ToothIcon class="w-6 dark:text-green-real" />
      <PopoverMenu />
    </div>
  </div>
</template>
