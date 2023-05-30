<script setup>
const isMinimize = useState('isMinize', () => false)
const isMaximize = useState('isMaximize', () => false)
const isFullWidth = useState('isFullWidth', () => false)
</script>

<template>
  <div
    class="absolute bottom-0 drop-shadow-lg right-16 text-sm shadow-lg shadow-cyan-500/200 rounded-t-lg"
  >
    <div class="bg-[#f2f5fc] p-3 flex items-center justify-between w-[17rem]">
      <p>New Message</p>
      <div class="flex items-center space-x-2">
        <Icon
          name="codicon:chrome-minimize"
          class="w-5 h-auto cursor-pointer"
        />
        <Icon
          name="ic:outline-open-in-full"
          class="w-4 h-auto cursor-pointer"
        />
        <Icon name="ic:round-close" class="w-4 h-auto cursor-pointer" />
      </div>
    </div>
  </div>
</template>
