<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
definePageMeta({
  layout: "custom",
});
const expanded = useState("expanded", () => false);
</script>

<template>
  <div>
    <div class="overflow-x-hidden bg-gray-50 dark:bg-transparent">
      <header class="py-4 md:py-6">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-1">
              <p
                class="text-xl font-semibold text-gray-600 dark:text-green-real"
              >
                Nuxt
              </p>
              <Icon name="logos:google-gmail" class="w-8 h-auto" />
              <p
                class="text-xl font-semibold text-gray-600 dark:text-green-real"
              >
                Clone
              </p>
            </NuxtLink>

            <div class="flex lg:hidden">
              <ThemeMode />
              <button
                type="button"
                class="text-gray-900"
                @click="expanded = !expanded"
                :aria-expanded="expanded"
              >
                <span v-show="!expanded" aria-hidden="true">
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span v-show="expanded" aria-hidden="true">
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div
              class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10"
            >
              <ThemeMode />
              <NuxtLink
                to="/auth/signin"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:text-green-real"
                role="button"
              >
                Sign up
              </NuxtLink>
            </div>
          </div>

          <nav v-show="expanded">
            <div class="px-1 py-8">
              <div class="grid gap-y-7">
                <NuxtLink
                  to="/auth/signin"
                  class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:text-green-real"
                  role="button"
                >
                  Sign up
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section class="pt-5 bg-gray-50 dark:bg-transparent">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto">
            <div>
              <p
                class="text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight dark:text-green-real"
              >
                The Gmail Clone with a
                <span class="relative inline-flex sm:inline">
                  <span
                    class="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"
                  ></span>
                  <span class="relative"> dark mode 🤣😎. </span>
                </span>
              </p>

              <div class="my-5 space-y-3">
                <p
                  class="text-base text-gray-500 font-inter dark:text-green-real"
                >
                  Technologies Used:
                </p>
                <div class="flex items-center gap-3">
                  <NuxtLink class="block">
                    <Icon name="logos:nuxt-icon" class="w-12 h-auto" />
                  </NuxtLink>
                  <NuxtLink class="block">
                    <Icon name="logos:tailwindcss-icon" class="w-12 h-auto" />
                  </NuxtLink>
                  <NuxtLink class="block">
                    <Icon name="logos:firebase" class="w-12 h-auto" />
                  </NuxtLink>
                  <NuxtLink class="block">
                    <Icon name="logos:cloudinary-icon" class="w-12 h-auto" />
                  </NuxtLink>
                  <NuxtLink class="block">
                    <Icon name="logos:pinia" class="w-12 h-auto" />
                  </NuxtLink>
                </div>
              </div>

              <div>
                <NuxtLink
                  to="/auth/signin"
                  class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:text-green-real"
                  role="button"
                >
                  Get Started
                </NuxtLink>
              </div>
            </div>

            <NuxtImg
              class="rounded-xl w-full h-full shadow drop-shadow-sm border bg-white"
              :src="isDark ? '/images/dark-mode.png' : '/images/light-mode.png'"
              alt="light-mode"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
