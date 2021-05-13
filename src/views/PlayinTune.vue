<template>
  <div class="wrapper">
    <div class="playin-tune">
      <playin-tune-header></playin-tune-header>
      <playin-tune-nav></playin-tune-nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PlayinTuneHeader from "../components/PlayinTuneHeader.vue";
import PlayinTuneNav from "../components/PlayinTuneNav.vue";

export default {
  components: {
    PlayinTuneHeader,
    PlayinTuneNav,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #fff9f0;
  width: 100%;
  height: auto;

  .playin-tune {
    width: 60%;
    margin: 0 auto;
    padding-top: 1vh;
  }
}
</style>
