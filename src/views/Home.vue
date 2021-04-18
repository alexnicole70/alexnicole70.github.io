<template>
  <div class="about">
    <nav-bar :colors="colors.hex" />

    <home-intro />
    <passions />
    <volunteer-stars />
    <work-exp />
    <home-skills />
    <contact-me />
  </div>
</template>
<script>
import NavBar from "../components/NavBar";

import HomeIntro from "../components/HomeIntro";
// import { Chrome } from "vue-color";

import Passions from "../components/Passions.vue";
import VolunteerStars from "../components/VolunteerStars.vue";
import HomeSkills from "../components/HomeSkills.vue";
import WorkExp from "../components/WorkExp.vue";
import ContactMe from "../components/ContactMe.vue";

export default {
  name: "About",
  components: {
    NavBar,
    HomeIntro,
    Passions,
    VolunteerStars,
    HomeSkills,
    WorkExp,
    ContactMe,
    // "chrome-picker": Chrome,
  },
  data() {
    return {
      colors: { hex: "#ffffff" },
      workExperiences: [
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
        {
          title: "Undergraduate Research Opportunity",
          timeFrame: "Jul 2019 - Nov 2019",
          descriptions: [
            "Under Dr. Matthew Lim, I effectuated a study examining the relationship between maternal behaviour and a child’s emotional response.",
            "Conscientiousness was a necessity as I was put in charge of organising the experiment’s execution: scheduling participants, assigning roles and responsibilites to the other team members, reccomending improvements to the exerimental flow, etc.",
            "Additionally, I conducted a literature review concerning the long-term impact of parental metacognitions on children’s identity formation",
          ],
        },
      ],
    };
  },
  methods: {
    async manyColors() {
      /**
       * Generate many colors in random way
       */
      /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
      while (1) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomColor);
        await new Promise((r) => setTimeout(r, 1000));
        this.colors.hex = `#${randomColor}`;
      }
    },
  },
  async mounted() {
    // await this.manyColors();
  },
};
</script>
<style lang="scss" scoped></style>
