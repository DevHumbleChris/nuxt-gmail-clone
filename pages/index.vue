<script setup>
definePageMeta({
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
