<template>
  <div class="d-flex flex-row">
    <div class="circle-side-bar d-flex flex-column">
      <playin-tune-header-circle
        class="d-flex"
        color="#399fb4"
      ></playin-tune-header-circle>
      <playin-tune-header-circle
        class="d-flex"
        color="#f79c35"
      ></playin-tune-header-circle>
      <playin-tune-header-circle
        class="d-flex"
        color="#ffdf00"
      ></playin-tune-header-circle>
      <playin-tune-header-circle
        class="d-flex"
        color="#becc33"
      ></playin-tune-header-circle>
      <playin-tune-header-circle
        class="d-flex"
        color="#ff9fcc"
      ></playin-tune-header-circle>
    </div>
    <div class="description">
      <h1>PlayinTune</h1>
      <b>What is it:</b>
      <p>
        PlayinTune is a mobile application which aims to help elementary school
        children finetune their sense of pitch.
      </p>
      <p>
        The app adoptes the format of popular music tiles games (e.g. Piano
        tiles), to make the learning process more interactive. Instead of
        pressing the screen with their fingers however, children strum their
        instruments to play the game.
      </p>
      <p>Children can choose between 2 modes:</p>
      <ol>
        <li>
          Learn mode: children learn to play specific notes/chords in a game
          where the note/chord appears at various intervals on screen. Each
          strum is rated upon 100 as a gauge of how close the child matched that
          note. At the end of the exercise children receive an average score.
        </li>
        <li>
          Play mode: children strum their instruments in time to the
          notes/chords that appear on screen. At the end of each song, children
          receive a summary of the notes they missed the most, so that they can
          review them in the ‘learn mode’.
        </li>
      </ol>
      <b>Tagline:</b>
      <p>Hit the right notes for your Jam!</p>
      <b>Fonts:</b>
      <ul>
        <li style="font-family: filson-soft, sans-serif">Filson Soft</li>
        <li style="font-family: brother-1816-printed, sans-serif">
          Brother 1816 Printed
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PlayinTuneHeaderCircle from "../components/PlayinTuneHeaderCircle.vue";

export default {
  components: {
    PlayinTuneHeaderCircle,
  },
};
</script>

<style lang="scss" scoped>
.circle-side-bar {
  width: 100px;
  margin: 2rem;
  justify-content: space-around;
}
.description {
  p,
  li {
    font-family: brother-1816-printed, sans-serif;
  }
  h1 {
    font-family: filson-soft, sans-serif;
  }
}
</style>
