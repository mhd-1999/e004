<template>
  <div id="second-form">
    <!-- <input type="text" /> -->
    <div class="form-group" v-for="item in companyList" :key="item.id">
      <div class="select-box">
        <select>
          <option value="1">{{ item.compName }}</option>
        </select>
        <button><img :src="trashIcon" alt="" /></button>
      </div>
      <InputItem
        label="Vị trí từng làm"
        isRequired
        type="text"
        :value="item.position"
      ></InputItem>
      <InputItem label="Thời gian làm việc" isRequired type="date"
        ><input type="date"
      /></InputItem>
      <TextArea label="Mô tả về công việc" :value="item.des"></TextArea>
    </div>
    <p class="add-button" @click="handleAdd">
      <img :src="plusIcon" /><span>Thêm công ty</span>
    </p>
  </div>
</template>

<script>
import InputItem from "../OverForm/InputItem.vue";
import TextArea from "./TextArea.vue";
import trashIcon from "../../assets/Image/trash.png";
import plusIcon from "../../assets/Image/plus.png";
export default {
  name: "SecondForm",
  data() {
    return {
      companyList: [
        {
          id: 1,
          compName: "Mor",
          position: "Dev Fe",
          start: "01/01/2021",
          end: "01/01/2022",
          des: "mor.......",
        },
      ],
      expCount: 1,
      trashIcon,
      plusIcon,
    };
  },
  components: { InputItem, TextArea },
  methods: {
    handleAdd() {
      this.companyList.push({ compName: "", position: "", start: "", des: "" });
    },
  },
};
</script>

<style scoped>
#second-form {
  width: 932px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.form-group {
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 24px 24px 38px 24px;
  margin-bottom: 28px;
}
.form-group .select-box {
  display: flex;
  background: #f8f8f8;
  border-radius: 4px;
  margin-bottom: 24px;
}
.form-group .select-box select {
  flex: 80%;
  padding: 8px 10px;
  margin: 10px 0 10px 10px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.form-group .select-box select:focus {
  outline: none;
}
.form-group .select-box button {
  padding: 14px;
  border: none;
  background: #f8f8f8;
}
.add-button {
  display: flex;
  flex-direction: row;
  width: 151px;
  font-size: 16px;
  padding: 8px 8px 8px 0;
  margin: 20px 0 24px 0;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
}
.add-button span {
  font-size: 16px;
  line-height: 24px;
  color: #48647f;
}
.add-button img {
  padding: 0 8px;
}
</style>
