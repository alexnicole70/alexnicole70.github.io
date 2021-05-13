<template>
  <div class="d-flex flex-row nav-row">
    <playin-tune-nav-button
      :isActive="$route.name === 'PlayinTuneMoodBoard'"
      id="mood-board"
      class="nav-button"
    >
      <router-link to="mood-board"> Mood Board </router-link>
    </playin-tune-nav-button>

    <playin-tune-nav-button
      buttonText="Navigation Map"
      :isActive="$route.name === 'PlayinTuneNavMap'"
      id="nav-map"
      class="nav-button"
    >
      <router-link to="nav-map"> Navigation Map </router-link>
    </playin-tune-nav-button>

    <playin-tune-nav-button
      buttonText="Buttons"
      :isActive="$route.name === 'PlayinTuneButtons'"
      id="buttons"
      class="nav-button"
    >
      <router-link to="buttons"> Buttons </router-link>
    </playin-tune-nav-button>

    <playin-tune-nav-button
      buttonText="Sketches"
      :isActive="$route.name === 'PlayinTuneSketches'"
      id="sketches"
      class="nav-button"
    >
      <router-link to="sketches"> Sketches </router-link>
    </playin-tune-nav-button>
  </div>
</template>

<script>
import PlayinTuneNavButton from "./PlayinTuneNavButton.vue";
export default {
  components: { PlayinTuneNavButton },
};
</script>
<style lang="scss" scoped>
.nav-row {
  .nav-button {
    width: 20rem;
    margin: 0 0.5rem;
  }

  justify-content: space-evenly;
}
</style>
