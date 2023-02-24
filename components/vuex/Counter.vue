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
    <!-- counter: {{ counter }} -->

    <button v-on:click="$store.commit('CounterStore/countUp')">+1</button>
    <!-- <button v-on:click="countUp">+1</button> -->

    <button v-on:click="$store.commit('CounterStore/countReset')">reset</button>
    <!-- <button v-on:click="countReset">reset</button> -->
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
      // NOTE script側でstoreの値を取得する場合は`this`を使う
      return this.$store.state.CounterStore.message;
    },

    // NOTE template側でなく、computedオプションでストアからstateを呼び出す場合
    // counter: function () {
    //   return this.$store.state.CounterStore.counter;
    // },
  },

  methods: {
    // NOTE template側でなく、methodsオプションでストアからmutationsを呼び出す場合
    // countUp() {
    //   this.$store.commit("CounterStore/countUp");
    // },
    // countReset() {
    //   this.$store.commit("CounterStore/countReset");
    // },
  },
};
</script>
