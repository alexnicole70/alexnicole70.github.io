<template>
  <div>
    <nav
      class="navbar navbar-light nav-bar"
      :style="{ backgroundColor: bgColor }"
    >
      <div style="width: 80%">
        <router-link to="/">
          <div class="home-logo"><alex-logo :colors="colors" /></div>
        </router-link>
      </div>
      <div class="home-button">
        <router-link to="/"> <home-button /></router-link>
      </div>
      <div>
        <ul>
          <li><a href="#passions">Passions</a></li>
          <li><router-link to="/designs/">Designs</router-link></li>
          <li><a href="#volunteering">Volunteering</a></li>
          <li><router-link to="/volunteer/sps/">SPS</router-link></li>
          <li><router-link to="/volunteer/mymca/">MYMCA</router-link></li>
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

const ROUTE_COLOR = {
  VolunteerSPS: "#f07382",
  VolunteerMYMCAYes: "#f07382",
  VolunteerMYMCAPRSC: "#f07382",
  VolunteerMYMCAMentoring: "#f07382",
};

function getFromObject(obj, key, defaultValue) {
  if (obj[key] === undefined) {
    return defaultValue;
  } else {
    return obj[key];
  }
}

export default {
  name: "nav-bar",
  data() {
    return {
      bgColor: "#65d6d1",
    };
  },
  components: { HomeButton, AlexLogo },
  props: ["colors"],
  watch: {
    $route() {
      console.log(
        `Route name: ${this.$route.name} | Route id: ${this.$route.id}`
      );
      const bgColor = getFromObject(ROUTE_COLOR, this.$route.name, "#65d6d1");
      this.bgColor = bgColor;
    },
  },
  mounted() {},
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
