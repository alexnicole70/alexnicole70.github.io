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
        <ul class="primary-nav">
          <li>
            <a
              href="#passions"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'passions'
                    ? null
                    : 'passions'
                  : 'passions'
              "
              :class="navClass('passions')"
              >Passions</a
            >
          </li>

          <li>
            <a
              href="#volunteering"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'volunteering'
                    ? null
                    : 'volunteering'
                  : 'volunteering'
              "
              :class="navClass('volunteering')"
              >Volunteering</a
            >
          </li>

          <li>
            <a
              href="#works"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'works'
                    ? null
                    : 'works'
                  : 'works'
              "
              :class="navClass('works')"
              >Works</a
            >
          </li>
          <li>
            <a
              href="#projects"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'projects'
                    ? null
                    : 'projects'
                  : 'projects'
              "
              :class="navClass('projects')"
              >UX Projects</a
            >
          </li>
          <li>
            <a
              href="/#skills"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'skills'
                    ? null
                    : 'skills'
                  : 'skills'
              "
              :class="navClass('skills')"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#contact"
              @click="
                currentSelection = currentSelection
                  ? currentSelection === 'contact'
                    ? null
                    : 'contact'
                  : 'contact'
              "
              :class="navClass('contact')"
              >Contact Me</a
            >
          </li>
        </ul>
        <ul
          v-if="currentSelection === 'passions'"
          class="secondary-nav"
          id="passions-nav"
        >
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'designs'
                  ? null
                  : 'designs'
                : 'designs'
            "
          >
            <router-link to="/designs/" :class="secondaryNavClass('designs')"
              >Designs</router-link
            >
          </li>
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'photography'
                  ? null
                  : 'photography'
                : 'photography'
            "
          >
            <router-link
              to="/photography/"
              :class="secondaryNavClass('photography')"
              >Photography</router-link
            >
          </li>
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'french'
                  ? null
                  : 'french'
                : 'french'
            "
          >
            <router-link to="/french/" :class="secondaryNavClass('french')"
              >French</router-link
            >
          </li>
        </ul>
        <ul
          v-if="currentSelection === 'volunteering'"
          class="secondary-nav"
          id="volunteer-nav"
        >
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'sps'
                  ? null
                  : 'sps'
                : 'sps'
            "
          >
            <router-link to="/volunteer/sps/" :class="secondaryNavClass('sps')"
              >SPS</router-link
            >
          </li>
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'mymca'
                  ? null
                  : 'mymca'
                : 'mymca'
            "
          >
            <router-link
              to="/volunteer/mymca/yes"
              :class="secondaryNavClass('mymca')"
              >MYMCA</router-link
            >
          </li>
        </ul>
        <ul
          v-if="currentSelection === 'projects'"
          class="secondary-nav"
          id="projects-nav"
        >
          <li
            @click="
              secondarySelection = secondarySelection
                ? secondarySelection === 'playin_tune'
                  ? null
                  : 'playin_tune'
                : 'playin_tune'
            "
          >
            <router-link
              to="/projects/playin_tune/mood-board"
              :class="secondaryNavClass('playin_tune')"
              >PlayinTune</router-link
            >
          </li>
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

      currentSelection: null,
      secondarySelection: null,
    };
  },
  components: { HomeButton, AlexLogo },
  props: ["colors"],
  computed: {},
  methods: {
    navClass(v) {
      if (this.currentSelection === v || !this.currentSelection) {
        return "isActive";
      }
      return "";
    },
    secondaryNavClass(v) {
      if (this.secondarySelection === v || !this.secondarySelection) {
        return "isActive";
      }
      return "";
    },
  },
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
.primary-nav,
.secondary-nav {
  .isActive {
    color: white !important;
  }
  :not(.isActive) {
    color: #ffffff75 !important;
  }
}
</style>
