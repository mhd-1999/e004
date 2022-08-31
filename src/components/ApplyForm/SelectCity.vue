<template>
  <div class="input-item">
    <label for="select-city">Thành phố</label>
    <select id="select-city" name="select-city">
      <option v-for="item in list" :key="item.id" value="index">
        <span v-if="item.name.includes('Tỉnh')">
          {{ item.name.replace("Tỉnh", "") }}
        </span>
        <span v-else-if="item.name.includes('Thành phố')">
          {{ item.name.replace("Thành phố  ", "") }}</span
        >
        <slot></slot>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCity",
  props: {
    list: Array,
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
