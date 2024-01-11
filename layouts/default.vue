<script setup>
import {
  ClockIcon,
  EnvelopeIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";
import { useMailboxesStore } from "~/stores/mailboxes";
const route = useRoute();
const mailboxesStore = useMailboxesStore();

useHead({
  meta: [
    { property: "og:title", content: `Nuxt Gmail Clone - ${route.meta.title}` },
    {
      name: "description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    {
      property: "og:description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    { property: "og:url", content: "https://nuxt-gmail-clone.vercel.app" },
    { name: "twitter:title", content: "Nuxt Gmail Clone" },
    {
      name: "twitter:description",
      content:
        "Nuxt Gmail Clone Built With NuxtJS 3, Supabase, and TailwindCSS.",
    },
    { name: "twitter:site", content: "https://nuxt-gmail-clone.vercel.app" },
  ],
  title: `Nuxt Gmail Clone - ${route.meta.title}`,
});
</script>

<template>
  <main class="flex bg-[#f7f8fc] dark:bg-green-dark">
    <Sidebar />
    <section class="w-full p-1.5 lg:p-2.5">
      <Header />
      <div class="my-2 p-1.5 flex space-x-2">
        <div class="w-full bg-white dark:bg-green-dark-light rounded-2xl">
          <div class="flex items-center justify-between p-2">
            <input type="checkbox" name="all-check" id="all-check" />
            <Icon
              name="material-symbols:archive-outline-rounded"
              class="w-5 h-auto"
            />
            <Icon name="ri:spam-2-line" class="w-5 h-auto" />
            <Icon name="ion:trash-outline" class="w-5 h-auto" />
            <ClockIcon class="w-5" />
            <EnvelopeIcon class="w-5" />
            <Icon name="ic:outline-add-task" class="w-5 h-auto" />
            <Icon name="mdi:folder-move-outline" class="w-5 h-auto" />
            <Icon
              name="material-symbols:label-outline-rounded"
              class="w-5 h-auto"
            />
            <EllipsisVerticalIcon class="w-5" />
          </div>
          <slot />
        </div>
        <div class="space-y-6 hidden lg:block">
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
      <Compose />
    </section>
  </main>
</template>
