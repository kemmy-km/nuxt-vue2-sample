<template>
  <div id="header">
    <div class="container">
      <h1>3月15日までのNuxt, Vueのキャッチアップコンテンツ</h1>
      <p>
        ※ここは`Header.vue`として`default.vue`に配置している共通ヘッダーです
      </p>

      <GlobalNav />
    </div>
  </div>
</template>

<script>
import GlobalNav from "~/components/GlobalNav.vue";

export default {
  components: {
    GlobalNav,
  },
};
</script>

<style scoped>
#header {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  min-height: 4rem;
  padding: 1rem 1rem;
  color: #fff;
  font-weight: bold;
}
</style>
