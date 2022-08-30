<template>
  <div id="app">
    <HeaderForm :currentStep="currentStep" :step="step"></HeaderForm>
    <keep-alive> <component v-bind:is="component" /> </keep-alive>
    <ButtonForm
      @handleNext="handleNext"
      @handleBack="handleBack"
      :currentStep="currentStep"
    ></ButtonForm>
  </div>
</template>

<script>
import FirstForm from "./components/ApplyForm/FirstStep.vue";
import SecondForm from "./components/ApplyForm/SecondStep.vue";
import ThirdForm from "./components/ApplyForm/ThirdStep.vue";
import { step } from "./data/data.js";
import HeaderForm from "./components/ApplyForm/HeaderForm.vue";
import ButtonForm from "./components/OverForm/ButtonForm.vue";
export default {
  name: "App",
  data() {
    return {
      currentStep: 1,
      component: FirstForm,
      step: step,
      isActive: false,
    };
  },
  methods: {
    handleNext() {
      if (this.component === FirstForm) {
        this.component = SecondForm;
        this.currentStep = 2;
      } else if (this.component === SecondForm) {
        this.component = ThirdForm;
        this.currentStep = 3;
      }
    },
    handleBack() {
      if (this.component === ThirdForm) {
        this.component = SecondForm;
        this.currentStep = 2;
      } else if (this.component === SecondForm) {
        this.component = FirstForm;
        this.currentStep = 1;
      }
    },
  },
  components: { HeaderForm, ButtonForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h3 {
  font-size: 24px;
  line-height: 36px;
  text-align: start;
  margin-bottom: 4px;
}
#header-form {
  width: 932px;
  margin: 32px auto;
}
.step {
  display: flex;
}
.step .step-item {
  display: flex;
  flex-direction: column;
  margin-right: 23px;
}
.step-idx {
  width: 32px;
  height: 32px;
  border-radius: 90px;
  background: #dbdbdb;
  color: #fff;
  line-height: 32px;
  margin: 14px auto;
  position: relative;
  z-index: 1;
}

.step-check {
  background: #627d98;
}
.step .step-item p {
  font-size: 14px;
}
.step .step-item .step-idx:before {
  content: "";
  position: absolute;
  width: 125px;
  background: #dbdbdb;
  top: 50%;
  left: 32px;
  border: 1px solid #dbdbdb;
  z-index: 0;
}
.step .step-item:last-child .step-idx:before {
  width: unset;
  border: unset;
}
.step .active-idx {
  background: red;
}
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
