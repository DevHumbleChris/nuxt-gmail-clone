<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "vue-sonner";

const route = useRoute();
const db = useFirestore();
const user = useCurrentUser();

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

const mailboxStore = useMailboxesStore();
const isMailChecked = computed(() => {
  return mailboxStore?.isMailChecked;
});

const userCheckedMails = computed(() => {
  return mailboxStore?.userCheckedMails;
});

const markAllUserMailAsRead = async (mail) => {
  try {
    const mailsLength = userCheckedMails.value.length;
    let mailStatus = null;
    await userCheckedMails.value.map((mail) => {
      mailStatus = mail.read;
      const inboxDocRef = doc(db, "users", user.value.email, "inbox", mail.id);

      updateDoc(inboxDocRef, {
        read: !mailStatus,
      });
    });
    mailboxStore?.updateIsMailChecked(false);
    mailboxStore?.updateUserCheckedMails([]);
    await mailboxStore?.updateReportStatus("action read/unread");
    toast.info(
      `${mailsLength} ${mailsLength > 0 ? "Mails" : "Mail"} Marked As ${
        mailStatus ? "Unread" : "Read"
      }`
    );
  } catch (error) {
    toast.error(error.message);
  }
};

const moveAllMailToTrash = async () => {
  try {
    const mailsLength = userCheckedMails.value.length;
    let mailStatus = null;
    await userCheckedMails.value.map((mail) => {
      mailStatus = mail.trashed;
      const inboxDocRef = doc(db, "users", user.value.email, "inbox", mail.id);

      updateDoc(inboxDocRef, {
        trashed: !mailStatus,
      });
    });
    mailboxStore?.updateIsMailChecked(false);
    mailboxStore?.updateUserCheckedMails([]);
    await mailboxStore?.updateReportStatus("mails trashed");
    toast.info(
      `${mailsLength} ${mailsLength > 0 ? "Mails" : "Mail"} Moved ${
        mailStatus ? "From" : "To"
      } Trash`
    );
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <main class="flex relative max-w-[85rem] mx-auto overflow-hidden">
    <LazySidebar />
    <section class="w-full p-1.5 lg:p-2.5">
      <Header />
      <div class="my-2 p-1.5 flex space-x-2">
        <div class="w-full bg-white dark:bg-green-dark-light rounded-2xl">
          <div
            class="flex items-center gap-4 sm:gap-8 px-5 py-3 dark:text-green-real text-gray-600"
          >
            <div v-if="!isMailChecked" class="flex gap-3">
              <Icon name="ic:round-refresh" class="w-5 h-auto cursor-pointer" />
              <Icon name="uil:ellipsis-v" class="w-5 h-auto cursor-pointer" />
            </div>
            <div
              v-if="isMailChecked"
              class="flex items-center border-r pr-3 sm:pr-5 gap-3 sm:gap-5"
            >
              <Icon
                name="material-symbols:archive-outline-rounded"
                class="w-5 h-auto cursor-pointer"
              />
              <Icon name="ri:spam-2-line" class="w-5 h-auto cursor-pointer" />
              <Icon
                @click="moveAllMailToTrash"
                name="ion:trash-outline"
                class="w-5 h-auto cursor-pointer"
              />
            </div>
            <div
              v-if="isMailChecked"
              class="flex items-center border-r pr-3 sm:pr-5 gap-3 sm:gap-5"
            >
              <Icon
                @click="markAllUserMailAsRead"
                name="material-symbols:mark-email-unread-outline-rounded"
                class="w-5 h-auto cursor-pointer"
              />
              <ClockIcon class="w-5 cursor-pointer" />
              <Icon
                name="ic:outline-add-task"
                class="w-5 h-auto cursor-pointer"
              />
            </div>
            <div
              v-if="isMailChecked"
              class="flex items-center pr-3 sm:pr-5 gap-3 sm:gap-5"
            >
              <Icon
                name="clarity:inbox-line"
                class="w-5 h-auto cursor-pointer"
              />
              <Icon
                name="material-symbols:label-outline-rounded"
                class="w-5 h-auto cursor-pointer"
              />
            </div>
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
    </section>
    <LazyCompose />
    <Toaster position="top-right" richColors closeButton />
    <LazySidebarMobile />
    <LazyAddImage />
    <LazyAddLink />
  </main>
</template>
