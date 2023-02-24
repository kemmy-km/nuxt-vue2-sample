<template>
  <div>
    <h2 class="mb-1">{{ title }}</h2>

    <div class="mb-1">
      <h3>↓storeのstateから呼び出した`users`</h3>
      <ul>
        <li v-for="(user, index) in users" :key="index">
          {{ user.name }}（{{ user.email }}）
        </li>
      </ul>
    </div>

    <div>
      <h3>↓storeのgettersから呼び出した`getUsers`</h3>
      <ul>
        <li v-for="(user, index) in getUsers" :key="index">
          {{ user.name }}（{{ user.email }}）
        </li>
      </ul>
    </div>

    <p>
      <!-- template側でstoreのstateを直接呼ぶ場合 -->
      <!-- {{ this.$store.state.UserStore.users }} -->

      <!-- template側でstoreのgettersを直接呼ぶ場合 -->
      <!-- {{ this.$store.getters["UserStore/getUsers"] }} -->
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "ユーザー情報",
    };
  },
  computed: {
    // storeの`state`をreturn
    users: function () {
      return this.$store.state.UserStore.users;
    },

    // storeの`getters`をreturn
    getUsers: function () {
      return this.$store.getters["UserStore/getUsers"];
    },
  },
};
</script>
