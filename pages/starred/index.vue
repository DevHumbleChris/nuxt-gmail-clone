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
const sent = useCollection(collection(db, "users", user.value.email, "sent"));

onBeforeMount(() => {
  activeStore?.setActiveRoute("starred");
});

const userMails = computed(() => {
  const filteredInboxMails = inbox.value.filter((mail) => mail.starred);
  const filteredSentMails = sent.value.filter((mail) => mail.starred);
  return [...filteredInboxMails, ...filteredSentMails];
});
</script>

<template>
  <section>
    <div
      v-if="userMails.length <= 0"
      class="bg-[#f3f4f6] p-4 text-sm text-center text-gray-600 space-y-2"
    >
      <p>
        No starred messages. Stars let you give messages a special status to
        make them easier to find.
      </p>
      <p>
        To star a message, click on the star outline beside any message or
        conversation.
      </p>
    </div>
    <div v-else>
      <LazyMessage v-for="mail in userMails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
