<script setup>
import { collection } from "firebase/firestore";
definePageMeta({
  title: "Inbox",
  middleware: ["auth"],
});
const db = useFirestore();
const todos = useCollection(collection(db, "todos"));
console.log(todos);
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage v-for="todo in todos" :key="todo.id" />
    </div>
  </section>
</template>
