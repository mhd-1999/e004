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

<style scoped>
.button-control {
  width: 932px;
  display: flex;
  flex-direction: row;
  margin: 24px auto;
}
.button-control button {
  padding: 10px 30px;
  background: #dcdcdc;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  gap: 10px;
}
</style>
