<template>
  <div id="multi-input">
    <label for="">Vị trí làm việc</label>
    <div class="input-field">
      <img :src="searchIcon" alt="" />
      <div class="field-tags"></div>
      <input type="text" :placeholder="placeHolder" v-model="searchValue" />
    </div>
    <div class="tags" v-show="searchValue">
      <p v-for="(item, index) in fieldTags" :key="index" :value="item.name">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import searchIcon from "../../assets/Image/search.png";
import { position } from "../../data/data";
export default {
  name: "Multi-Input",
  props: {
    placeHolder: String,
  },
  data() {
    return {
      searchIcon,
      position,
      searchValue: "",
      positionField: [],
    };
  },
  computed: {
    fieldTags() {
      return this.position.filter((item) =>
        item.name.toLowerCase().match(this.searchValue.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
#multi-input {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 10px;
}
.input-field {
  display: flex;
  width: 528px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.input-field input {
  width: 100%;
  border: none;
  font-size: 12px;
}
.input-field input:focus {
  outline: none;
}
.input-field img {
  padding: 8px 10px;
}
</style>
