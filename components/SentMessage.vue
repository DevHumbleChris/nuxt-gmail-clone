<script setup>
import { StarIcon, ClockIcon } from "@heroicons/vue/24/outline";
import { formatDistance } from "date-fns";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "vue-sonner";

const db = useFirestore();
const mailboxStore = useMailboxesStore();

const props = defineProps({
  mail: Object,
});

const user = useCurrentUser();

const checkedMails = useState("checkedMails", () => []);

const reportStatus = computed(() => {
  return mailboxStore?.reportStatus;
});

watch(checkedMails, (newMails, oldMails) => {
  if (newMails.length > 0) {
    mailboxStore?.updateIsMailChecked(true);
    mailboxStore?.updateUserCheckedMails(newMails);
  } else {
    mailboxStore?.updateIsMailChecked(false);
    mailboxStore?.updateUserCheckedMails(newMails);
  }

  if (oldMails.length > 0 && reportStatus.value === "action read/unread") {
    checkedMails.value = [];
    mailboxStore?.updateReportStatus("");
  }
});

const mail = computed(() => {
  return props?.mail;
});

const formatDateWithDateFNS = (date) => {
  return formatDistance(date.toDate(), new Date(), {
    addSuffix: true,
  });
};

const starMail = async (mail) => {
  try {
    let mailStatus = mail.starred;
    const inboxDocRef = doc(db, "users", user.value.email, "sent", mail.id);

    await updateDoc(inboxDocRef, {
      starred: !mailStatus,
    });

    toast.info(mailStatus ? "Mail Unstarred" : "Mail Starred.");
  } catch (error) {
    toast.error(error.message);
  }
};

const markUserMail = async (mail) => {
  try {
    let mailStatus = mail.read;
    const inboxDocRef = doc(db, "users", user.value.email, "sent", mail.id);

    await updateDoc(inboxDocRef, {
      read: !mailStatus,
    });
    toast.info(mailStatus ? "Mail Marked As Unread." : "Mail Marked As Read.");
  } catch (error) {
    toast.error(error.message);
  }
};

const markUserMailImportant = async (mail) => {
  try {
    let mailStatus = mail.important;
    const inboxDocRef = doc(db, "users", user.value.email, "sent", mail.id);

    await updateDoc(inboxDocRef, {
      important: !mailStatus,
    });

    toast.info(
      mailStatus ? "Mail Marked As Not Important." : "Mail Marked As Important."
    );
  } catch (error) {
    toast.error(error.message);
  }
};

const moveMailToTrash = async (mail) => {
  try {
    let mailStatus = mail.trashed;
    const inboxDocRef = doc(db, "users", user.value.email, "sent", mail.id);

    updateDoc(inboxDocRef, {
      trashed: !mailStatus,
    });

    toast.info("Mail Moved To Trash");
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <div
    class="w-full flex flex-col xl:flex-row xl:items-center space-y-1 gap-5 dark:hover:shadow-green-real px-4 py-3 hover:drop-shadow-xl group border text-sm cursor-pointer dark:border-gray-700/50"
    :class="{
      'bg-[#f2f5fc] dark:bg-green-dark': mail.read,
      'bg-white dark:bg-green-dark-light': !mail.read,
    }"
  >
    <div class="flex space-x-3 items-center">
      <Icon
        name="material-symbols:star-rate-rounded"
        @click="starMail(mail)"
        v-if="mail.starred"
        class="w-6 h-auto text-[#f3c74a] dark:text-green-real"
      />
      <StarIcon
        @click="starMail(mail)"
        v-else
        class="w-5 text-gray-400 dark:text-green-real hover:text-gray-700"
      />
      <Icon
        v-if="mail.important"
        @click="markUserMailImportant(mail)"
        name="material-symbols:label-important-sharp"
        class="w-5 h-auto text-[#f3c74a] dark:text-green-real hover:text-gray-700"
      />
      <svg
        v-else
        @click="markUserMailImportant(mail)"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 text-gray-400 dark:text-green-real hover:text-gray-700"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m3 19l4.5-7L3 5h13.05L21 12l-4.95 7H3Zm3.65-2H15l3.55-5L15 7H6.65l3.25 5l-3.25 5Zm3.25-5L6.65 7l3.25 5l-3.25 5l3.25-5Z"
        ></path>
      </svg>
    </div>
    <div
      class="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-2 lg:gap-4"
    >
      <NuxtLink
        :to="'/inbox/' + mail?.id"
        class="flex flex-col sm:flex-row items-center gap-2"
      >
        <p class="dark:text-green-real w-full">{{ mail.senderName }}</p>
        <div
          class="w-full xl:max-w-[42rem] group-hover:max-w-[37rem] text-gray-500"
        >
          <p
            class="truncate flex flex-col sm:flex-row sm:gap-3 max-w-[12rem] sm:max-w-[25rem] xl:max-w-full dark:text-green-real"
          >
            <span
              class="block font-semibold text-gray-800 dark:text-gray-300"
              >{{ mail?.subject }}</span
            >
            <span class="hidden sm:block">-</span>
            <span
              class="block truncate -mt-4 sm:-mt-0 dark:text-gray-300"
              v-html="mail.body"
            ></span>
          </p>
        </div>
      </NuxtLink>
      <p class="group-hover:hidden dark:text-green-real">
        {{ formatDateWithDateFNS(mail?.timestamp) }}
      </p>
      <div
        class="group-hover:flex hidden items-center justify-between space-x-3 text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 dark:text-green-real"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 8v11h14V8H5Zm7 10l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Zm-7 1h14H5Z"
          ></path>
        </svg>
        <Icon
          name="material-symbols:mark-email-unread"
          @click="markUserMail(mail)"
          v-if="mail?.read"
          class="w-5 h-auto dark:text-green-real cursor-pointer"
        />
        <Icon
          name="mdi:email-open"
          class="w-5 h-auto dark:text-green-real cursor-pointer"
          v-else
          @click="markUserMail(mail)"
        />
      </div>
    </div>
  </div>
</template>
