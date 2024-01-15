<script setup>
import { toast } from "vue-sonner";
definePageMeta({
  layout: "custom",
  title: "Signin",
});
const isAuthenticating = useState("isAuthenticating", () => false);

const signInWithGoogle = async () => {};
</script>

<template>
  <section class="mx-2">
    <div class="mx-auto max-w-lg text-center space-y-3 mt-32 lg:mt-40">
      <Icon name="logos:google-gmail" class="w-44 h-auto" />
      <button
        @click="signInWithGoogle"
        class="m-auto group text-center relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        :disabled="isAuthenticating"
      >
        <span
          class="w-full relative flex justify-center items-center gap-3 text-sm sm:text-base font-medium text-gray-600"
        >
          <div
            v-if="isAuthenticating"
            class="w-5 h-5 rounded-full border-2 animate-spin border-dashed border-indigo-600"
          ></div>
          <Icon v-else name="logos:google-icon" class="w-5" />

          <span :class="{ 'animate-pulse': isAuthenticating }"
            >{{ isAuthenticating ? "Authenticating" : "Continue with Google" }}
          </span>
        </span>
      </button>
      <img
        src="/images/google_workspace.png"
        alt="google_workspace"
        class="mx-auto object-fit"
      />
      <p class="flex items-center justify-center text-sm text-gray-500">
        Made with
        <Icon
          name="tabler:heart-filled"
          class="text-red-600 w-4 h-auto ml-1"
        />,
        <NuxtLink
          href="https://the-coding-montana.vercel.app"
          class="hover:underline"
          >The Coding Montana</NuxtLink
        >.
      </p>
    </div>
  </section>
</template>
