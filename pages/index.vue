<script setup>
definePageMeta({
  middleware: 'auth'
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
