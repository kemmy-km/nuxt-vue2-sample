<template>
  <section class="container">
    <div>
      <UserVuex />
    </div>
  </section>
</template>

<script>
import UserVuex from "~/components/vuex/UserVuex.vue";

export default {
  components: {
    UserVuex,
  },
  data() {
    return {
      firstMessage: "1つ目のコンポーネントのメッセージです",
    };
  },
};
</script>
