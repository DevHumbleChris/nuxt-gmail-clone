<script setup>
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useActiveStore } from "~/stores/active";
import { toast } from "vue-sonner";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
const db = useFirestore();
const user = useCurrentUser();
const activeStore = useActiveStore();
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));
const sent = useCollection(collection(db, "users", user.value.email, "sent"));

onBeforeMount(() => {
  activeStore?.setActiveRoute("trashed");
});

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => mail.trashed);
  return filteredMails;
});

const userSentMails = computed(() => {
  const filteredMails = sent.value.filter((mail) => mail.trashed);
  return filteredMails;
});

const emptyTrash = async () => {
  try {
    await userMails.value.map(async (mail) => {
      const inboxDocRef = doc(db, "users", user.value.email, "inbox", mail.id);
      await deleteDoc(inboxDocRef);
    });

    await userSentMails.value.map(async (mail) => {
      const inboxDocRef = doc(db, "users", user.value.email, "sent", mail.id);
      await deleteDoc(inboxDocRef);
    });

    toast.success("All Mails Deleted");
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <section>
    <div
      v-if="userMails.length > 0"
      class="bg-[#f3f4f6] dark:bg-green-dark-light dark:text-green-real p-4 text-sm text-center text-gray-600"
    >
      Messages that have been in Trash more than 30 days will be automatically
      deleted.
      <span
        @click="emptyTrash"
        class="text-blue-600 cursor-pointer p-2 hover:bg-blue-100 rounded"
        >Empty Trash now</span
      >
    </div>
    <div
      v-else
      class="bg-[#f3f4f6] dark:bg-green-dark-light dark:text-green-real p-4 text-sm text-center text-gray-600"
    >
      No conversations in Trash.
    </div>
    <div>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
