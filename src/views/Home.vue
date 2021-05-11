<template>
  <div class="about">
    <home-intro />
    <passions id="passions" />
    <volunteer-stars id="volunteering" />
    <work-exp id="works" />
    <home-skills id="skills" />
    <contact-me id="contact" />
  </div>
</template>
<script>
import HomeIntro from "../components/HomeIntro";

import Passions from "../components/Passions.vue";
import VolunteerStars from "../components/VolunteerStars.vue";
import HomeSkills from "../components/HomeSkills.vue";
import WorkExp from "../components/WorkExp.vue";
import ContactMe from "../components/ContactMe.vue";

export default {
  name: "About",
  components: {
    HomeIntro,
    Passions,
    VolunteerStars,
    HomeSkills,
    WorkExp,
    ContactMe,
  },
};
</script>
<style lang="scss" scoped></style>
