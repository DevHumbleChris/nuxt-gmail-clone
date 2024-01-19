<script setup>
import { StarIcon, ClockIcon } from "@heroicons/vue/24/outline";
import { formatDistance, subDays } from "date-fns";
import { doc, updateDoc } from "firebase/firestore";

const db = useFirestore();

const props = defineProps({
  mail: Object,
});

const user = useCurrentUser();

const mail = computed(() => {
  return props?.mail;
});

const formatDateWithDateFNS = (date) => {
  return formatDistance(date.toDate(), new Date(), {
    addSuffix: true,
  });
};

const viewMail = async (id) => {
  const inboxDocRef = doc(db, "users", user.value.email, "inbox", id);

  await updateDoc(inboxDocRef, {
    read: true,
  });
  navigateTo({
    path: "/inbox/" + id,
  });
};
</script>

<template>
  <div
    @click="viewMail(mail.id)"
    class="w-full flex flex-col xl:flex-row xl:items-center justify-between space-y-1 dark:bg-green-dark-light dark:hover:shadow-green-real px-4 py-3 hover:drop-shadow-xl group border text-sm cursor-pointer dark:border-gray-700/50"
    :class="{ 'bg-[#f2f5fc]': mail.read }"
  >
    <div class="flex space-x-3 items-center">
      <input
        class="rounded cursor-pointer dark:bg-green-real"
        type="checkbox"
        name="message-check"
        id="message-check"
      />
      <StarIcon class="w-5 dark:text-green-real" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 dark:text-green-real"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m3 19l4.5-7L3 5h13.05L21 12l-4.95 7H3Zm3.65-2H15l3.55-5L15 7H6.65l3.25 5l-3.25 5Zm3.25-5L6.65 7l3.25 5l-3.25 5l3.25-5Z"
        ></path>
      </svg>
    </div>
    <p class="dark:text-green-real">{{ mail.senderName }}</p>
    <div
      class="w-full xl:max-w-[42rem] group-hover:max-w-[37rem] text-gray-500"
    >
      <p
        class="truncate flex gap-3 max-w-[12rem] sm:max-w-[25rem] xl:max-w-full dark:text-green-real"
      >
        <span class="block font-semibold text-gray-800">{{
          mail?.subject
        }}</span>
        -
        <span class="block truncate" v-html="mail.body"></span>
      </p>
    </div>
    <div class="flex items-center justify-between space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 group-hover:block hidden dark:text-green-real"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 8v11h14V8H5Zm7 10l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Zm-7 1h14H5Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 group-hover:block hidden dark:text-green-real"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 group-hover:block hidden dark:text-green-real"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"
        ></path>
      </svg>
      <ClockIcon class="w-5 group-hover:block hidden dark:text-green-real" />
    </div>
    <p class="group-hover:hidden dark:text-green-real">
      {{ formatDateWithDateFNS(mail?.timestamp) }}
    </p>
  </div>
</template>
