<script setup>
import { formatDistance, formatRelative } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
const props = defineProps({
  mail: Object,
});

const mail = computed(() => {
  return props?.mail;
});

const formatDateWithDateFNS = (date) => {
  let dateToConvert = date ? date.toDate() : new Date();
  return formatRelative(dateToConvert, new Date());
};
</script>

<template>
  <div class="w-full">
    <div class="px-[68px] py-4 flex items-center gap-3">
      <h1 class="text-3xl text-gray-600 font-medium">{{ mail?.subject }}</h1>
      <Icon
        name="material-symbols:label-important-outline"
        class="w-5 h-auto text-gray-400"
      />
    </div>
    <div class="px-5 flex items-center justify-between">
      <div class="flex gap-3">
        <img
          src="https://lh3.googleusercontent.com/ogw/AOLn63FDwvpMYoohxMTsrPnCh-5UanYRmFplX0A9ld-H=s32-c-mo"
          alt="the-coding-montana"
          class="w-10 h-10 object-fit rounded-full"
        />
        <div>
          <div class="text-sm flex items-center gap-1">
            <h2 class="font-semibold">{{ mail?.senderName }}</h2>
            <p class="text-xs text-gray-600 font-medium">
              &lt;{{ mail?.sender }}&gt;
            </p>
          </div>
          <div class="flex items-center gap-1 text-sm text-gray-500">
            <p>to me</p>
            <HoverCard>
              <HoverCardTrigger
                ><Icon
                  name="material-symbols:arrow-drop-down"
                  class="w-5 h-auto cursor-pointer"
              /></HoverCardTrigger>
              <HoverCardContent class="w-[22rem] text-sm">
                <div>
                  <p class="flex gap-2">
                    <span class="block text-gray-500">from:</span>
                    <span class="block text-gray-600 font-semibold">{{
                      mail?.sender
                    }}</span>
                  </p>
                  <p class="flex gap-2">
                    <span class="block text-gray-500">to:</span>
                    <span class="block text-gray-600 font-semibold">{{
                      mail?.recipient
                    }}</span>
                  </p>
                  <p class="flex gap-2">
                    <span class="block text-gray-500">date:</span>
                    <span class="block text-gray-600 font-semibold">{{
                      formatDateWithDateFNS(mail?.timestamp)
                    }}</span>
                  </p>
                  <p class="flex gap-2">
                    <span class="block text-gray-500">subject:</span>
                    <span class="block text-gray-600 font-semibold">{{
                      mail?.subject
                    }}</span>
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
      <div>
        <div class="text-[13px] flex items-center gap-6 text-gray-600">
          <p>{{ formatDateWithDateFNS(mail?.timestamp) }}</p>
          <Icon
            name="material-symbols:star-outline-rounded"
            class="w-5 h-auto"
          />
          <div class="flex items-center gap-5">
            <Icon
              name="fluent:emoji-smile-slight-24-regular"
              class="w-5 h-auto"
            />
            <Icon name="material-symbols:reply" class="w-5 h-auto" />
            <Icon name="uil:ellipsis-v" class="w-5 h-auto" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-[70px] text-sm my-4">
      <div v-html="mail?.body"></div>
    </div>
  </div>
</template>
