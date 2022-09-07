<template>
  <div id="third-form">
    <TextArea label="Lý do muốn ứng tuyển vào công ty" isRequired></TextArea>
    <InputItem label="Mức lương mong muốn" isRequired><p>VND</p></InputItem>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";
import InputItem from "../OverForm/InputItem.vue";
export default {
  name: "ThirdForm",
  components: { TextArea, InputItem },
};
</script>

<style scoped>
#third-form {
  width: 926px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 0 auto;
  padding: 20px 32px;
}
label {
  margin-bottom: 6px;
}
</style>
