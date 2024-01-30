<script setup>
import { Button } from "~/components/ui/button";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleMode = useToggle(isDark);
</script>

<template>
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
</template>
