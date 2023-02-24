<template>
  <div>
    <h2>子コンポーネント側のタイトル</h2>
    <p>message: {{ message }}</p>
    <p>message2: {{ message2 }}</p>
    <p>message3: {{ message3 }}</p>
  </div>
</template>
<script>
export default {
  props: ["message", "message2", "message3"],

  mounted: function () {
    this.$parent.message3 = "`mounted`で書き換えました";
  },
};
</script>
