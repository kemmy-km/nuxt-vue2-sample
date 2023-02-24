<template>
  <div id="globalNav" class="mt-1">
    <NuxtLink to="/tax-calc"> 消費税計算（computed） </NuxtLink> /
    <NuxtLink to="/v-model"> お店アンケート（v-model） </NuxtLink> /
    <NuxtLink to="/parent-child"> 親子コンポーネント（props） </NuxtLink> /
    <NuxtLink to="/counter-vuex"> カウンター（Vuex） </NuxtLink> /
    <NuxtLink to="/user-vuex"> ユーザー情報（Vuex） </NuxtLink> /
    <NuxtLink to="/read-json"> jsonデータの加工 </NuxtLink>

    <p>
      ※ここは`GlobalNav.vue`として`default.vue`に配置している共通ナビゲーションコンポーネントです
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#globalNav {
  background: transparent;
  color: #fff;
  font-weight: bold;
}

#globalNav a {
  color: #fff;
}
</style>
