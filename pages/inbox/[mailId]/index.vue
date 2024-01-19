<script setup>
import { collection, where } from "firebase/firestore";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
  layout: "mailpreview",
});
const db = useFirestore();
const user = useCurrentUser();

const { params } = useRoute();

const mailID = computed(() => {
  return params?.mailId;
});

const userMails = useCollection(
  collection(db, "users", user.value.email, "inbox")
);

const mail = computed(() => {
  const isMail = userMails.value.filter(
    (userMail) => userMail.id === mailID.value
  );
  return isMail[0];
});
</script>

<template>
  <section>
    <LazyEmailPreview :mail="mail" />
  </section>
</template>
