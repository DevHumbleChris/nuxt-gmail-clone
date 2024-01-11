<script setup lang="ts">
import {
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/solid";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleMode = useToggle(isDark);
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
      <span>{{ isDark ? "Dark" : "Light" }}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button class="bg-transparent border-0" variant="outline" size="icon">
            <Icon
              name="material-symbols:wb-sunny-outline-rounded"
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icon
              name="ph:moon-stars-bold"
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            @click="toggleMode()"
            class="flex items-center gap-2 cursor-pointer"
          >
            <Icon
              name="material-symbols:wb-sunny-outline-rounded"
              class="w-5 h-auto"
            />
            <span class="block">Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="toggleMode()"
            class="flex items-center gap-2 cursor-pointer"
          >
            <Icon name="ph:moon-stars-bold" class="w-5 h-auto" />
            <span class="block">Dark</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <QuestionMarkCircleIcon class="w-6 hidden sm:block" />
      <Cog6ToothIcon class="w-6 hidden sm:block" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 hidden sm:block"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        />
      </svg>
      <Cog6ToothIcon class="w-6" />
      <PopoverMenu />
    </div>
  </div>
</template>
