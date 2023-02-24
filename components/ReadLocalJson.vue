<template>
  <div class="mb-2">
    <h2>jsonデータの取得</h2>
    <div class="container mt-1">
      <h3>`~/assets/json/`ディレクトリに配置されたjsonデータから取得</h3>
      <div v-for="(item, i) in menus" :key="`localJson-${i}`">
        {{ item }}
      </div>
      <div v-for="(item, i) in menus" :key="`localJson2-${i}`">
        <a v-bind:href="item.link">{{ item.category }}</a>
      </div>
    </div>

    <div class="container mt-1 mb-2">
      <h3>storeから取得</h3>
      <div v-for="(item, i) in getAll" :key="`localJson-store-${i}`">
        {{ item }}
      </div>
      <div v-for="(item, i) in getAll" :key="`localJson--2-${i}`">
        <a v-bind:href="item.link">{{ item.category }}</a>
      </div>
    </div>

    <p>`ReadLocalJson.vue`の最後です</p>
    <hr class="mt-1" />
  </div>
</template>
<script>
import menus from "~/assets/json/menu.json";

export default {
  data() {
    return {
      menus: menus,
    };
  },

  computed: {
    // storeの`state`をreturn
    data: function () {
      return this.$store.state.JsonDataStore.data;
    },

    // storeの`getters`をreturn
    getAll: function () {
      return this.$store.getters["JsonDataStore/getAll"];
    },
  },
};
</script>
