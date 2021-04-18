<template>
  <div>
    <nav class="navbar navbar-light nav-bar">
      <div style="width: 80%">
        <div class="home-logo"><alex-logo :colors="colors"/></div>
      </div>
      <div class="home-button">
        <home-button />
      </div>
      <div>
        <ul>
          <li><a href="#passions">Passions</a></li>
          <li><a href="#volunteering">Volunteering</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#projects">UX Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import HomeButton from "./HomeButton.vue";
import AlexLogo from "./AlexLogo.vue";

export default {
  name: "nav-bar",
  components: { HomeButton, AlexLogo },
  props: ["colors"],
  methods: {},
};
</script>
<style lang="scss" scoped>
nav.navbar {
  background-color: #65d6d1;
  display: flex;
  flex-direction: row;

  h1 {
    width: 100%;
  }

  ul {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;

    li {
      margin-right: 2em;
      font-size: 16pt;
      font-family: "Domine", serif;
      font-weight: bold;
      a {
        color: white;
      }
    }
  }
}
.home-button {
  width: 3em;
  float: right;
  margin-right: 1em;
}
.home-logo {
  width: 10em;
  margin: 1em;
  margin-left: 0;
}
</style>
