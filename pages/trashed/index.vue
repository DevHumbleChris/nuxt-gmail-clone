<script setup>
import { collection } from "firebase/firestore";
import { useActiveStore } from "~/stores/active";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
const db = useFirestore();
const user = useCurrentUser();
const activeStore = useActiveStore();
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));

onBeforeMount(() => {
  activeStore?.setActiveRoute("trashed");
});

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => mail.trashed);
  return filteredMails;
});
</script>

<template>
  <section>
    <div
      v-if="userMails.length > 0"
      class="bg-[#f3f4f6] p-4 text-sm text-center text-gray-600"
    >
      Messages that have been in Trash more than 30 days will be automatically
      deleted.
      <span class="text-blue-600 cursor-pointer p-2 hover:bg-blue-100 rounded"
        >Empty Trash now</span
      >
    </div>
    <div>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
