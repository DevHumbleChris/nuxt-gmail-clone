<script setup>
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useActiveStore } from "~/stores/active";
import { toast } from "vue-sonner";
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

onBeforeMount(async () => {
  await mails.value.map(async (mail) => {
    const sentDocRef = doc(db, "users", user.value.email, "sent", mail.id);

    await updateDoc(sentDocRef, {
      read: true,
    });
  });
});

const emptySentMails = async () => {
  try {
    await mails.value.map(async (mail) => {
      const sentDocRef = doc(db, "users", user.value.email, "sent", mail.id);
      await deleteDoc(sentDocRef);
    });

    toast.success("All Sent Mails Deleted Permanently");
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <section>
    <div
      v-if="mails.length > 0"
      class="bg-[#f3f4f6] p-4 text-sm text-center text-gray-600"
    >
      Overview Of Sent Mails.
      <span
        @click="emptySentMails"
        class="text-blue-600 cursor-pointer p-2 hover:bg-blue-100 rounded"
        >Empty Sent Mails Now</span
      >
    </div>
    <div>
      <LazySentMessage v-for="mail in mails" :key="mail.id" :mail="mail" />
    </div>
  </section>
</template>
