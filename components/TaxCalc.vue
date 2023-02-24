<template>
  <section>
    <h2>{{ title }}</h2>
    <p>金額：{{ price }}円</p>
    <p>税率：{{ taxRate }}%</p>
    <p>消費税：{{ calcTax }}円</p>
    <p>合計値：{{ totalValue }}円</p>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: "消費税計算",
      price: 1800,
      taxRate: 10,
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
};
</script>
