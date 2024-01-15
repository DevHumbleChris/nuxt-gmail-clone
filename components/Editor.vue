<script setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useState("editor", () => null);

onMounted(() => {
  editor.value = new Editor({
    content: "",
    extensions: [StarterKit],
  });
});
</script>

<template>
  <EditorContent :editor="editor" data-hs-editor-field />
</template>

<style scope>
.ProseMirror:focus {
  outline: none;
}

.tiptap ul p,
.tiptap ol p {
  display: inline;
}

.tiptap p.is-editor-empty:first-child::before {
  font-size: 14px;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
