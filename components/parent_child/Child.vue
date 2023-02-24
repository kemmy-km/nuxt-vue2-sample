<template>
  <div>
    <h2>子コンポーネント側のタイトル</h2>

    <div class="container mt-2 mb-1">
      <h3>props</h3>
      <p class="mb-1">
        親コンポーネント側から子コンポーネント側に値（文字列や変数）を渡したい時に使います。
      </p>
      <p>message: {{ message }}</p>
      <p>message2: {{ message2 }}</p>
      <p>message3: {{ message3 }}</p>
    </div>

    <hr />
    <div class="container mt-1 mb-1">
      <h3>$emit</h3>
      <p class="mb-1">
        子コンポーネント側から親コンポーネントのメソッドを使用したい場合に使います。
      </p>
      <button @click="$emit('eventTest1')">
        子コンポーネントのtemplateから親コンポーネントのメソッドを呼び出すボタン
      </button>
      <button @click="$emit('eventTest2', '1つ目の引数', '2つ目の引数')">
        子コンポーネントのtemplateから親コンポーネントのメソッドを呼び出すボタン2
      </button>
      <button @click="execEmit()">
        子コンポーネントのscriptから親コンポーネントのメソッドを呼び出すボタン2
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message", "message2", "message3"],
  methods: {
    execEmit: function () {
      // 親側で`@eventTest2="test2"`の記載がある場合はtest2に定義されているmethodsに引数を入れて処理を適用する
      this.$emit("eventTest2", "1つ目の引数", "2つ目の引数");
    },
  },

  // ライフサイクルフック
  mounted: function () {
    this.$parent.message3 = "`mounted`で書き換えました";
  },
  // 他にも`created`, `beforeDestroy`, `beforeMount`などがある
  // https://ja.vuejs.org/api/options-lifecycle.html
};
</script>
