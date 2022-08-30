<template>
  <div id="text-area">
    <label for="area">{{ label }}</label>
    <textarea id="area"></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    label: String,
  },
};
</script>

<style scoped>
#text-area {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 528px;
  margin-bottom: 10px;
}
#text-area textarea {
  height: 152px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
}
#text-area textarea:focus {
  outline: none;
  border: 1px solid orange;
}
</style>
