<script setup>
definePageMeta({
  title: 'Inbox'
})
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage />
    </div>
  </section>
</template>
