<template>
  <div id="text-area">
    <label><span v-show="isRequired">Must</span>{{ label }}</label>
    <textarea
      id="area"
      :value="valueInput"
      @input="onInputValue"
      @change="handleChangeInput"
      :maxlength="maxLength"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    label: String,
    valueInput: String,
    isRequired: Boolean,
    maxLength: String,
  },
  methods: {
    onInputValue(e) {
      this.$emit("update:valueInput", e.target.value);
    },
    handleChangeInput() {
      this.$emit("handleChangeInput");
    },
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
span {
  font-size: 12px;
  color: #fff;
  padding: 5px 8px;
  background-color: #627d98;
  line-height: 20px;
  border-radius: 3px;
  margin-right: 8px;
}
label {
  margin-bottom: 6px;
}
.active textarea {
  border-color: red !important;
}
</style>
