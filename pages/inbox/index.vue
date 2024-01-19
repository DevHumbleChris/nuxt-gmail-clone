<script setup>
import { collection, where } from "firebase/firestore";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
const db = useFirestore();
const user = useCurrentUser();
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => !mail.trashed);
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
