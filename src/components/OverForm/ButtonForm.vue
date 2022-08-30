<template>
  <div class="button-control">
    <button @click="handleBack" v-show="currentStep > 1">Quay lại</button>
    <button @click="handleNext" v-show="currentStep < 3">Tiếp</button>
    <button v-show="currentStep == 3">Hoàn Thành</button>
  </div>
</template>

<script>
export default {
  name: "ButtonControl",
  props: {
    currentStep: Number,
  },
  methods: {
    handleBack() {
      this.$emit("handleBack");
    },
    handleNext() {
      this.$emit("handleNext");
    },
  },
};
</script>

<style></style>
