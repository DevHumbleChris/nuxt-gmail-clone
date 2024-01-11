<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const logOut = async () => {};
</script>

<template>
  <div>
    <Menu as="div" class="relative">
      <div>
        <MenuButton class="mt-1.5">
          <img
            src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
            alt="the-coding-montana"
            class="w-6 h-6 object-fit rounded-full"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 z-30 w-60 origin-top-right divide-y divide-gray-100 rounded-xl p-1 bg-[#f7f8fc] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="relative flex items-center">
            <MenuItem v-slot="{ active }">
              <div>
                <div
                  class="bg-white p-3 text-sm group flex w-full items-center rounded-xl space-x-2"
                >
                  <img
                    :src="user?.user_metadata?.avatar_url"
                    :alt="user?.user_metadata?.full_name"
                    class="w-12 h-12 rounded-full"
                  />
                  <div class="text-left w-full">
                    <p>{{ user?.user_metadata?.full_name }}</p>
                    <p class="text-[9px]">{{ user?.user_metadata?.email }}</p>
                  </div>
                </div>
                <button
                  @click="logOut"
                  class="p-3 w-full hover:bg-[#eaf1fb] block mt-2 sm:flex items-center space-x-4"
                >
                  <Icon name="material-symbols:logout" class="w-5 h-auto" />
                  <span class="block">Sign out</span>
                </button>
              </div>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
