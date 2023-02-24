<template>
  <div>
    <h2>jsonデータの取得</h2>
    <div class="container mt-1">
      <h3>`~/assets/json/`ディレクトリに配置されたjsonデータから取得</h3>
      <div v-for="(item, index) in menus" v-bind:key="`menus-${index}`">
        {{ item }}
      </div>
      <div v-for="(item, index) in menus" v-bind:key="`menus2-${index}`">
        <a v-bind:href="item.link">{{ item.category }}</a>
      </div>
    </div>

    <div class="container mt-1">
      <h3>storeから取得</h3>
      <div v-for="(item, index) in getAll" v-bind:key="`fetch-store-${index}`">
        {{ item }}
      </div>
      <div v-for="(item, index) in getAll" v-bind:key="`fetch-store2-${index}`">
        <a v-bind:href="item.link">{{ item.category }}</a>
      </div>
    </div>

    <hr class="mt-1" />

    <div class="container mt-1">
      <h3>fetchメソッドで非同期通信し取得したjson</h3>
      <div class="mb-1">
        JSON取得元：
        <a href="https://jsonplaceholder.typicode.com/users" target="_blank"
          >https://jsonplaceholder.typicode.com/users</a
        >
      </div>
      <div v-for="(item, index) in getFetchAll" v-bind:key="`fetch-${index}`">
        <div class="mb-1">
          id: {{ item.id }}
          <br />
          name: {{ item.name }}
          <br />
          username: {{ item.username }}
          <br />
          email: {{ item.email }}
          <br />
          address:
          <br />
          --------
          <br />
          street: {{ item.address.street }}
          <br />
          suite: {{ item.address.suite }}
          <br />
          city: {{ item.address.city }}
          <br />
          zipcode: {{ item.address.zipcode }}
          <br />
          geo: {{ item.address.geo.lat }}, {{ item.address.geo.lng }}
        </div>
        <br />
      </div>
    </div>
    <p>`FetchJson.vue`の最後です</p>
    <hr class="mt-1" />
  </div>
</template>
<script>
import menus from "~/assets/json/menu.json";
import { mapActions } from "vuex";

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

    getFetchAll: function () {
      return this.$store.getters["JsonDataStore/getFetchAll"];
    },
  },
  methods: {
    ...mapActions("JsonDataStore", ["fetchJson"]),
  },

  created() {
    console.log("ActionsのfetchJson()を実行します");
    this.fetchJson();
    console.log("ActionsのfetchJson()を実行しました");
  },
};
</script>
