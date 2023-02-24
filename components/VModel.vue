<template>
  <div>
    <h2>アンケート</h2>

    <form @submit.prevent>
      <div>
        お名前：
        <label>
          <input type="text" v-model="userData.name" />
        </label>
      </div>

      <div class="">
        性別：
        <label>
          <input type="radio" value="Male" v-model="gender" />
          男性
        </label>
        <label>
          <input type="radio" value="Female" v-model="gender" />
          女性
        </label>
      </div>

      <div>
        きっかけ：
        <label>
          <input type="checkbox" value="SNS" v-model="hear" />
          SNS
        </label>
        <label>
          <input type="checkbox" value="知り合いの紹介" v-model="hear" />
          知り合いの紹介
        </label>
        <label>
          <input type="checkbox" value="雑誌" v-model="hear" />
          雑誌
        </label>
      </div>

      <div>
        来店日：
        <label>
          <select v-model="period">
            <option v-for="period in periods" :key="period">
              {{ period }}
            </option>
          </select>
        </label>
      </div>

      <div>
        ご意見
        <label>
          <textarea rows="4" cols="40" v-model="message" />
        </label>
      </div>

      <div class="userdata mt-2">
        <h3>UserData</h3>
        <p>お名前: {{ userData.name }}</p>
        <p>性別： {{ gender }}</p>
        <p>きっかけ:</p>
        <ul>
          <li v-for="value in hear" :key="value">
            {{ value }}
          </li>
        </ul>

        <p>来店日： {{ period }}</p>

        <p class="message">ご意見： {{ message }}</p>
      </div>

      <!-- v-onを使用したクリックイベント発火 -->
      <button type="submit" v-on:click="confirmModal" class="mt-1">
        アンケートを終了する
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "",
      },
      gender: "",
      hear: [],
      message: "",
      periods: ["1週間以内", "2週間以内", "1ヶ月以内"],
      period: "",
    };
  },
  methods: {
    confirmModal: function () {
      if (
        confirm(
          "終了してよろしいですか？\n（このモーダルは`v-on`ディレクティブを使用して出現させています）"
        )
      ) {
        // トップに戻る
        this.$router.push("/");
      }
    },
  },
};
</script>
