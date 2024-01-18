<script setup>
import { collection } from "firebase/firestore";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
  layout: "mailpreview",
});
const db = useFirestore();
const user = useCurrentUser();
const inbox = useCollection(collection(db, "users", user.value.email, "inbox"));
</script>

<template>
  <section>
    <div>
      <!-- <LazyMessage v-for="mail in inbox" :key="mail.id" :mail="mail" /> -->
      <div class="px-[68px] py-4 flex items-center gap-3">
        <h1 class="text-3xl text-gray-600 font-medium">POSTER</h1>
        <Icon
          name="material-symbols:label-important-outline"
          class="w-5 h-auto text-gray-400"
        />
      </div>
      <div class="px-5">
        <div>
          <img
            src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
            alt="the-coding-montana"
            class="w-6 h-6 object-fit rounded-full"
          />
          <div class="text-sm flex items-center">
            <h2>Christopher Odhiambo</h2>
            <p>christopherodhiambo254@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
