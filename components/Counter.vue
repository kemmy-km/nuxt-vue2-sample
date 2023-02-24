<template>
  <section>
    <h2>{{ title }}</h2>
    <p>
      {{ message }}
    </p>
    <p>
      {{ parentMessage }}
    </p>
    <br />
    <!-- $store.オプション名.ファイル名.オプションの変数名 -->
    counter: {{ $store.state.CounterStore.counter }}
    <button v-on:click="$store.commit('CounterStore/countUp')">+1</button>
    <button v-on:click="$store.commit('CounterStore/countReset')">reset</button>
  </section>
</template>

<script>
export default {
  props: ["parentMessage"],
  data: function () {
    return {
      title: "Counter",
    };
  },
  computed: {
    message: function () {
      // script側でstoreの値を取得する場合は`this`を使う
      return this.$store.state.CounterStore.message;
    },
  },

  methods: {},
};
</script>
