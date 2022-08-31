<template>
  <div id="first-form">
    <form>
      <InputItem
        label="Họ và tên"
        name="full-name"
        type="text"
        isRequired
      ></InputItem>
      <InputItem
        label="Ngày sinh"
        name="date-picker"
        type="date"
        isRequired
      ></InputItem>
      <SelectCity :list="list"></SelectCity>
      <MultiInput placeHolder="Chọn các vị trí mà bạn muốn"></MultiInput>
      <TextArea label="Mô tả về bản thân"></TextArea>
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
//api for first form
const CITY_API = "https://provinces.open-api.vn/api/";
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
    };
  },
  methods: {
    async listBox() {
      try {
        const res = await axios.get(CITY_API);
        this.list = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.listBox();
  },
};
</script>

<style scoped>
#first-form {
  display: flex;
  flex-direction: column;
  width: 926px;
  margin: 0 auto;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 20px 14px;
}
</style>
