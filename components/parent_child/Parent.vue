<template>
  <div>
    <h2>親コンポーネント側のタイトル</h2>

    <!-- 下記のようにして、子コンポーネントを配置できる -->
    <Child
      message2="親コンポーネント側で、変数ではなく直接文字列を指定しています"
      v-bind:message="message"
      v-bind:message3="message3"
      @eventTest1="test1"
      @eventTest2="test2"
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
  methods: {
    test1: function () {
      alert("emit test1!!!");
    },
    test2: function (param1, param2) {
      alert("emit test2：" + param1 + " : " + param2);
    },
  },
};
</script>
