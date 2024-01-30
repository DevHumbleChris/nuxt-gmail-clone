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
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));

onBeforeMount(() => {
  activeStore?.setActiveRoute("inbox");
});

const userMails = computed(() => {
  const filteredMails = inbox.value.filter((mail) => !mail.trashed);
  return filteredMails;
});
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div
      v-if="userMails.length <= 0"
      class="bg-[#f3f4f6] p-4 text-sm text-center text-gray-600"
    >
      No conversations in Inbox.
    </div>
    <div>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
