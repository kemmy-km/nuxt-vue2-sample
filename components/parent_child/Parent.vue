<template>
  <div>
    <h2>親コンポーネント</h2>
    <Child
      message2="親コンポーネント側で、変数ではなく直接文字列を指定しています"
      v-bind:message="message"
      v-bind:message3="message3"
    />
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      message:
        "これは、親コンポーネントのdataオプションを子コンポーネントのpropsで受け取らせるデータです。",
      message3: "message3の値です",
    };
  },
};
</script>
