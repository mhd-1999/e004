<template>
  <div class="input-item">
    <label for="select-city">Thành phố</label>
    <select id="select-city" name="select-city">
      <option v-for="(item, index) in listCity" :key="index" value="index">
        <span v-if="item.name.includes('Tỉnh')">
          {{ item.name.replace("Tỉnh", "") }}
        </span>
        <span v-else-if="item.name.includes('Thành phố')">
          {{ item.name.replace("Thành phố  ", "") }}</span
        >
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SelectCity",
  data() {
    return {
      listCity: [],
    };
  },
  created() {
    axios
      .get("https://provinces.open-api.vn/api/")
      .then((res) => {
        this.listCity = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.input-item {
  display: flex;
  flex-direction: column;
  width: 528px;
  text-align: start;
  margin-bottom: 10px;
}
.input-item select {
  padding: 10px;
  border: 1px solid #dbdbdb;
  outline: none;
  background: #fff;
  border-radius: 4px;
}
select::-webkit-scrollbar {
  display: none;
}
.input-item select:focus {
  border: 1px solid orange;
}
</style>
