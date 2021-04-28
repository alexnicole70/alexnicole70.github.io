<template>
  <div class="about">
    <home-intro />
    <passions />
    <volunteer-stars />
    <work-exp />
    <home-skills />
    <contact-me />
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
