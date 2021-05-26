<template>
  <div>
    <eco-spark-header></eco-spark-header>
    <router-view></router-view>
  </div>
</template>

<script>
import EcoSparkHeader from "../components/EcoSparkHeader.vue";
export default {
  components: {
    EcoSparkHeader,
  },
};
</script>

<style></style>
