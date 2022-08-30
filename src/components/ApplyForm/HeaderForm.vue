<template>
  <div id="header-form">
    <h3>Đơn ứng tuyển</h3>
    <div class="step">
      <div
        v-for="(item, index) in step"
        :key="index"
        :class="{ active: currentStep == index + 1 }"
        class="step-item"
      >
        <span v-if="currentStep >= index + 1" class="step-idx step-check">
          {{ item.id }}
        </span>
        <span v-else class="step-idx">
          {{ item.id }}
        </span>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderForm",
  props: {
    currentStep: Number,
    step: Array,
  },
};
</script>

<style scoped></style>
