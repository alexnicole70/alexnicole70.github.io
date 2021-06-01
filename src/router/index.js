import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/designs",
    name: "Designs",
    component: () =>
      import(/* webpackChunkName: "designs" */ "../views/Designs.vue"),
  },
  {
    path: "/french",
    name: "French",
    component: () =>
      import(/* webpackChunkName: "french" */ "../views/French.vue"),
  },
  {
    path: "/photography",
    name: "Photography",
    component: () =>
      import(/* webpackChunkName: "photography" */ "../views/Photography.vue"),
  },
  {
    path: "/projects/playin_tune",
    name: "PlayinTune",
    component: () =>
      import(/* webpackChunkName: "playin_tune" */ "../views/PlayinTune.vue"),
    children: [
      {
        path: "mood-board",
        name: "PlayinTuneMoodBoard",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_mood_board" */ "../components/PlayinTuneMoodBoard.vue"
          ),
      },
      {
        path: "nav-map",
        name: "PlayinTuneNavMap",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_nav_map" */ "../components/PlayinTuneNavMap.vue"
          ),
      },
      {
        path: "buttons",
        name: "PlayinTuneButtons",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_buttons" */ "../components/PlayinTuneButtons.vue"
          ),
      },
      {
        path: "sketches",
        name: "PlayinTuneSketches",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_sketches" */ "../components/PlayinTuneSketches.vue"
          ),
      },
    ],
  },
  {
    path: "/projects/eco-sparks",
    name: "EcoSpark",
    component: () =>
      import(/* webpackChunkName: "eco_spark" */ "../views/EcoSpark.vue"),
    children: [
      {
        path: "description",
        name: "EcoSparkDescription",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_description" */ "../components/EcoSparkDescription.vue"
          ),
      },
      {
        path: "site-map",
        name: "EcoSparkSiteMap",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_site_map" */ "../components/EcoSparkSiteMap.vue"
          ),
      },
      {
        path: "mood-board",
        name: "EcoSparkMoodBoard",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_mood_board" */ "../components/EcoSparkMoodBoard.vue"
          ),
      },
      {
        path: "prototype",
        name: "EcoSparkPrototype",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_prototype" */ "../components/EcoSparkPrototype.vue"
          ),
      },
      {
        path: "reflection",
        name: "EcoSparkReflection",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_reflection" */ "../components/EcoSparkReflection.vue"
          ),
      },
    ],
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: () =>
      import(/* webpackChunkName: "volunteer" */ "../views/Volunteer.vue"),
    children: [
      {
        path: "sps",
        name: "VolunteerSPS",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_sps" */ "../components/VolunteerSPS.vue"
          ),
      },
      {
        path: "mymca/yes",
        name: "VolunteerMYMCAYes",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_yes" */ "../components/VolunteerMYMCAYes.vue"
          ),
      },
      {
        path: "mymca/prsc",
        name: "VolunteerMYMCAPRSC",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_prsc" */ "../components/VolunteerMYMCASummerCamp.vue"
          ),
      },
      {
        path: "mymca/mentoring",
        name: "VolunteerMYMCAMentoring",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_mentoring" */ "../components/VolunteerMYMCAMentoring.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
