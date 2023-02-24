<template>
  <div>
    <div class="container">
      <ReadLocalJson />
      <FetchJson />
    </div>
  </div>
</template>

<script>
import ReadLocalJson from "~/components/ReadLocalJson.vue";
import FetchJson from "~/components/FetchJson.vue";
export default {
  components: {
    ReadLocalJson,
    FetchJson,
  },
};
</script>
