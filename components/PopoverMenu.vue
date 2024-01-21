<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { signOut } from "firebase/auth";
import { toast } from "vue-sonner";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigateTo({
        path: "/auth/signin",
      });
      return toast.success("Signout Successfull!");
    })
    .catch((error) => {
      // An error happened.
      return toast.error(error.message);
    });
};
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
          class="absolute right-0 mt-2 z-30 w-60 origin-top-right divide-y divide-gray-100 rounded-xl p-1 bg-[#f7f8fc] dark:bg-green-dark-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="relative flex items-center">
            <MenuItem v-slot="{ active }">
              <div class="w-full">
                <div
                  class="p-3 text-sm group flex w-full items-center rounded-xl space-x-2"
                >
                  <img
                    :src="user.photoURL"
                    :alt="user.displayName"
                    class="w-12 h-12 rounded-full"
                  />
                  <div class="text-left w-full">
                    <p class="dark:text-green-real">{{ user.displayName }}</p>
                    <p class="text-[9px] dark:text-green-real">
                      {{ user.email }}
                    </p>
                  </div>
                </div>
                <button
                  @click="logOut"
                  class="p-3 w-full rounded-xl hover:bg-[#eaf1fb] dark:hover:bg-green-real dark:hover:text-white dark:text-green-real mt-2 flex items-center space-x-4"
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
