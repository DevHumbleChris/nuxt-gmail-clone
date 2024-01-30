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
  activeStore?.setActiveRoute("important");
});

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => mail.important);
  return filteredMails;
});
</script>

<template>
  <section>
    <div
      v-if="userMails.length <= 0"
      class="bg-[#f3f4f6] dark:bg-green-dark-light dark:text-green-real p-4 text-sm text-center text-gray-600"
    >
      No conversations in Important
    </div>
    <div>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
