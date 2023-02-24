<template>
  <section class="container">
    <div>
      <Counter />

      <!-- propsとVuexを同時に使うこともできるよ -->
      <!-- <Counter :parent-message="firstMessage" /> -->
      <hr />
      <Counter />
      <hr />
      <Counter />
    </div>
  </section>
</template>

<script>
import Counter from "~/components/Counter.vue";
export default {
  components: {
    Counter,
  },
  data() {
    return {
      firstMessage: "1つ目のコンポーネントのメッセージです",
    };
  },
};
</script>
