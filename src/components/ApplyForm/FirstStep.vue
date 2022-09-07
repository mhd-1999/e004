<template>
  <div id="first-layout">
    <form id="first-form" method="get" @submit.prevent="changeForm">
      <InputItem
        label="Họ và tên"
        name="full-name"
        type="text"
        isRequired
        :valueInput.sync="firstForm.fullName"
        @handleChangeInput="handleFocusInput"
      ></InputItem>
      <p v-show="checkStatus.isEmpty">{{ error.REQUIRED_NOTI }}</p>
      <p v-show="checkStatus.isOver">{{ error.INP_LENGTH }}</p>
      <InputItem
        label="Ngày sinh"
        name="date-picker"
        type="date"
        isRequired
        :valueInput.sync="firstForm.date"
        @handleChangeInput="handleFocusInput"
      ></InputItem>
      <SelectCity
        :list="list"
        label="Thành Phố"
        :selectValue.sync="firstForm.city"
      ></SelectCity>
      <MultiInput placeHolder="Chọn các vị trí mà bạn muốn"></MultiInput>
      <TextArea
        label="Mô tả về bản thân"
        :valueInput.sync="firstForm.description"
        @handleChangeArea="handleFocusArea"
      ></TextArea>
      <p>{{ firstForm.description.length }}/1000</p>
      <p v-show="checkStatus.isOverArea">{{ error.TEXT_AREA }}</p>
      <DropZone label="Ảnh cá nhân"></DropZone>
    </form>
  </div>
</template>
<script>
import InputItem from "../OverForm/InputItem.vue";
import SelectCity from "./SelectCity.vue";
import MultiInput from "./MultiInput.vue";
import TextArea from "./TextArea.vue";
import DropZone from "./DropZone.vue";
import axios from "axios";
import { CITY_API } from "@/data/data";
export default {
  name: "FirstForm",
  components: {
    InputItem,
    SelectCity,
    MultiInput,
    TextArea,
    DropZone,
  },
  data() {
    return {
      isRequired: true,
      list: [],
      error: {
        REQUIRED_NOTI: "This field is not empty!",
        INP_LENGTH: "Over 100 characters!",
        TEXT_AREA: "Over 1000 characters!",
      },
      checkStatus: {
        isEmpty: false,
        isOver: false,
        isOverArea: false,
      },
      firstForm: {
        fullName: "",
        date: "",
        city: "",
        description: "",
      },
    };
  },
  methods: {
    async listBox() {
      try {
        const res = await axios.get(CITY_API);
        this.list = res.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    handleFocusInput() {
      if (!this.firstForm.fullName) {
        this.checkStatus.isEmpty = true;
        this.checkStatus.isOver = false;
      } else if (this.firstForm.fullName.length > 10) {
        this.checkStatus.isOver = true;
        this.checkStatus.isEmpty = false;
      }
    },
    handleFocusArea() {
      if (this.firstForm.description.length > 1000) {
        this.checkStatus.isOverArea = true;
      } else {
        this.checkStatus.isOverArea = false;
      }
    },
  },
  created() {
    this.listBox();
  },
};
</script>

<style scoped>
#first-layout {
  display: flex;
  flex-direction: column;
  width: 926px;
  margin: 0 auto;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 20px 14px;
}
p {
  text-align: start;
}
</style>
span
