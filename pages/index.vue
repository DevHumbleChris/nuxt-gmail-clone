<script setup>
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage />
      <LazyMessage />
    </div>
  </section>
</template>
