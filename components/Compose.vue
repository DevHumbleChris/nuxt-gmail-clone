<script setup>
import { useComposeStore } from '~/stores/compose'

const composeStore = useComposeStore()

const isMinimize = computed(() => {
  return composeStore.isMinimize
})

const isMaximize = computed(() => {
  return composeStore.isMaximize
})

const isFullWidth = computed(() => {
  return composeStore.isFullWidth
})

const isComposingMail = computed(() => {
  return composeStore.isComposingMail
})

const maximize = () => {
  composeStore.maximize()
}

const minimize = () => {
  composeStore.minimize()
}

const composeMail = () => {
  composeStore.composeMail();
};
</script>

<template>
  <div
  v-show="isComposingMail"
    class="fixed right-0 w-full sm:h-[30rem] sm:w-[30rem] sm:absolute bottom-0 drop-shadow-2xl sm:right-16 text-sm shadow-lg shadow-cyan-500/200 rounded-t-lg z-30 overflow-hidden"
    :class="{ 'w-[17rem]': isMinimize, 'w-[30rem] h-[30rem]': isMaximize }"
  >
    <div class="bg-[#f2f5fc] p-3 flex items-center justify-between">
      <p class="text-[#172846]">New Message</p>
      <div class="flex items-center space-x-2">
        <button @click="minimize" class="cursor-pointer">
          <Icon
            name="codicon:chrome-minimize"
            class="w-5 h-auto"
          />
        </button>
        <button class="cursor-pointer">
          <Icon
            name="ic:outline-open-in-full"
            class="w-4 h-auto"
          />
        </button>
        <button @click="composeMail" class="cursor-pointer">
          <Icon name="ic:round-close" class="w-4 h-auto" />
        </button>
      </div>
    </div>
    <div :class="{ 'bg-white h-full w-full px-3': !isMinimize, 'hidden': isMinimize }">
      <div class="flex items-center justify-between border-b border-gray-200">
        <p>To</p>
        <input type="text" class="w-full outline-none border-0 focus:ring-0 bg-transparent">
        <div class="flex items-center space-x-2">
          <button class="hover:underline">Cc</button>
          <button class="hover:underline">Bcc</button>
        </div>
      </div>
      <div class="flex items-center justify-between border-b border-gray-200">
        <p>Cc</p>
        <input type="text" class="w-full outline-none border-0 focus:ring-0 bg-transparent">
        <div class="flex items-center space-x-2">
          <button class="hover:underline">Bcc</button>
        </div>
      </div>
      <div class="flex items-center justify-between border-b border-gray-200">
        <p>Bcc</p>
        <input type="text" class="w-full outline-none border-0 focus:ring-0 bg-transparent">
      </div>
    </div>
  </div>
</template>
