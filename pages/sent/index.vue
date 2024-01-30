<script setup>
import { collection } from "firebase/firestore";
import { useActiveStore } from "~/stores/active";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});

const activeStore = useActiveStore();
const db = useFirestore();
const user = useCurrentUser();

onBeforeMount(() => {
  activeStore?.setActiveRoute("sent");
});
const mails = useCollection(collection(db, "users", user.value.email, "sent"));
</script>

<template>
  <section>
    <div>
      <LazyMessage v-for="mail in mails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
