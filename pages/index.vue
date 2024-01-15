<script setup>
definePageMeta({
  middleware: ["auth"],
  title: "Inbox",
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
