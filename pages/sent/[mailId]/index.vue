<script setup>
import { collection } from "firebase/firestore";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
const db = useFirestore();
const user = useCurrentUser();
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage v-for="mail in inbox" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
