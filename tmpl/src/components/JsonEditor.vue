<template>
  <v-json-editor :data="json" :editable="editable"></v-json-editor>
</template>
<script>
export default {
  props: ['json']
}
</script>


