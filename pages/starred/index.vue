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
  activeStore?.setActiveRoute("starred");
});

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => mail.starred);
  return filteredMails;
});
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
