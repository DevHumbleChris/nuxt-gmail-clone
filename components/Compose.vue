<script setup>
const isMinimize = useState("isMinize", () => false);
const isMaximize = useState("isMaximize", () => true);
const isFullWidth = useState("isFullWidth", () => false);
const isComposingMail = useState('isComposingMail', () => true)

const maximize = () => {
  isMaximize.value = !isMaximize.value
  isMinimize.value = !isMinimize.value
}

const minimize = () => {
  isMinimize.value = !isMinimize.value
  isMaximize.value = !isMaximize.value
}
</script>

<template>
  <div
  v-show="isComposingMail"
    class="absolute bottom-0 drop-shadow-2xl right-16 text-sm shadow-lg shadow-cyan-500/200 rounded-t-lg z-30 overflow-hidden"
    :class="{ 'w-[17rem]': isMinimize, 'w-[30rem] h-[30rem]': isMaximize }"
  >
    <div class="bg-[#f2f5fc] p-3 flex items-center justify-between">
      <p class="text-[#172846]">New Message</p>
      <div class="flex items-center space-x-2">
        <button @click="minimize">
          <Icon
            name="codicon:chrome-minimize"
            class="w-5 h-auto cursor-pointer"
          />
        </button>
        <button>
          <Icon
            name="ic:outline-open-in-full"
            class="w-4 h-auto cursor-pointer"
          />
        </button>
        <button>
          <Icon name="ic:round-close" class="w-4 h-auto cursor-pointer" />
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
