<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="container">
      <h3>ソースコードを見て、computedを見てみよう</h3>
      <p>金額：{{ price }}円</p>
      <p>税率：{{ taxRate }}%</p>
      <p>消費税：{{ calcTax.toLocaleString() }}円</p>
      <p>税込価格：{{ totalValue.toLocaleString() }}円</p>
    </div>

    <div class="container mt-2">
      <h3>v-modelを使用してリアクティブに計算</h3>
      <form>
        <div>
          金額：
          <input type="text" v-model="calcDataObj.price" />円
        </div>
        <div>
          税率：
          <input type="text" v-model="calcDataObj.taxRate" />％
        </div>
        <div>
          消費税：{{
            ((calcDataObj.price * calcDataObj.taxRate) / 100).toLocaleString()
          }}円
        </div>
        <div>
          税込価格：{{
            (
              Number(calcDataObj.price) +
              Number((calcDataObj.price * calcDataObj.taxRate) / 100)
            ).toLocaleString()
          }}円
        </div>
      </form>
    </div>

    <div class="container mt-2">
      <h3>v-onを使用してクリック時に計算</h3>
      <form>
        <div>
          金額：
          <input type="text" v-model="calcDataObjWithVon.price" />円
        </div>
        <div>
          税率：
          <input type="text" v-model="calcDataObjWithVon.taxRate" />％
        </div>

        <button v-on:click="calcPriceWithTax" class="mt-1 mb-1">
          計算する
        </button>
        <button v-on:click="resetCalc" class="mt-1 mb-1">リセットする</button>

        <div>
          消費税：{{ calcDataObjWithVon.consumptionTax.toLocaleString() }}円
        </div>
        <div>税込価格：{{ calcDataObjWithVon.total.toLocaleString() }}円</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // 「ソースコードを見て、computedを見てみよう」用のデータ
      title: "消費税計算",
      price: 1800,
      taxRate: 10,

      // 「v-modelを使用してリアクティブに計算」用のデータ
      calcDataObj: {
        price: 1000,
        taxRate: 10,
      },

      // 「v-onを使用してクリック時に計算」用のデータ
      calcDataObjWithVon: {
        price: 1000,
        taxRate: 10,
        consumptionTax: 0,
        total: 0,
      },
    };
  },

  computed: {
    calcTax: function () {
      return (this.price * this.taxRate) / 100;
    },
    totalValue: function () {
      return Math.round(this.price + this.calcTax);
    },
  },

  methods: {
    // 「計算する」ボタンのクリック時に発火するメソッド
    calcPriceWithTax: function () {
      if (confirm("計算しますか？")) {
        // 計算結果を「消費税」の変数に代入
        this.calcDataObjWithVon.consumptionTax =
          (this.calcDataObjWithVon.price * this.calcDataObjWithVon.taxRate) /
          100;

        // デバッグしたい時（ブラウザのconsoleタブで確認できます）
        console.log(`消費税は？: ${this.calcDataObjWithVon.consumptionTax}円`);

        // 計算結果を「税込価格」の変数に代入
        this.calcDataObjWithVon.total =
          Number(this.calcDataObjWithVon.price) +
          Number(this.calcDataObjWithVon.consumptionTax);

        // デバッグしたい時（ブラウザのconsoleタブで確認できます）
        console.log(`税込価格は？: ${this.calcDataObjWithVon.total}円`);
      }
    },

    // 「リセットする」ボタンのクリック時に発火するメソッド
    resetCalc: function () {
      this.calcDataObjWithVon.consumptionTax = 0;
      this.calcDataObjWithVon.total = 0;
    },
  },
};
</script>
