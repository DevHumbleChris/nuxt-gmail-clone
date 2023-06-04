<script setup>
definePageMeta({
  middleware: 'auth',
  title: 'Inbox'
})
</script>

<template>
  <section>
    <LabelsWrapper />
    <div>
      <Message />
    </div>
  </section>
</template>
