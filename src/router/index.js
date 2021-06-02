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
    meta: { title: "Alex -> Passion -> Design" },
  },
  {
    path: "/french",
    name: "French",
    component: () =>
      import(/* webpackChunkName: "french" */ "../views/French.vue"),
    meta: { title: "Alex -> Passion -> French" },
  },
  {
    path: "/photography",
    name: "Photography",
    component: () =>
      import(/* webpackChunkName: "photography" */ "../views/Photography.vue"),
    meta: { title: "Alex -> Passion -> Photography" },
  },
  {
    path: "/projects/playin_tune",
    name: "PlayinTune",
    component: () =>
      import(/* webpackChunkName: "playin_tune" */ "../views/PlayinTune.vue"),
    meta: { title: "Alex -> UX Projects -> PlayinTune" },

    children: [
      {
        path: "mood-board",
        name: "PlayinTuneMoodBoard",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_mood_board" */ "../components/PlayinTuneMoodBoard.vue"
          ),
        meta: { title: "Alex -> UX Projects -> PlayinTune -> Mood Board" },
      },
      {
        path: "nav-map",
        name: "PlayinTuneNavMap",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_nav_map" */ "../components/PlayinTuneNavMap.vue"
          ),
        meta: { title: "Alex -> UX Projects -> PlayinTune -> Navigation Map" },
      },
      {
        path: "buttons",
        name: "PlayinTuneButtons",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_buttons" */ "../components/PlayinTuneButtons.vue"
          ),
        meta: { title: "Alex -> UX Projects -> PlayinTune -> Buttons" },
      },
      {
        path: "sketches",
        name: "PlayinTuneSketches",
        component: () =>
          import(
            /* webpackChunkName: "playin_tune_sketches" */ "../components/PlayinTuneSketches.vue"
          ),
        meta: { title: "Alex -> UX Projects -> PlayinTune -> Sketches" },
      },
    ],
  },
  {
    path: "/projects/eco-sparks",
    name: "EcoSpark",
    component: () =>
      import(/* webpackChunkName: "eco_spark" */ "../views/EcoSpark.vue"),
    meta: { title: "Alex -> UX Projects -> eco-Sparks" },
    children: [
      {
        path: "description",
        name: "EcoSparkDescription",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_description" */ "../components/EcoSparkDescription.vue"
          ),
        meta: { title: "Alex -> UX Projects -> eco-Sparks -> Descriptions" },
      },
      {
        path: "site-map",
        name: "EcoSparkSiteMap",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_site_map" */ "../components/EcoSparkSiteMap.vue"
          ),
        meta: {
          title: "Alex -> UX Projects -> eco-Sparks -> Site Map & Wireframe",
        },
      },
      {
        path: "mood-board",
        name: "EcoSparkMoodBoard",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_mood_board" */ "../components/EcoSparkMoodBoard.vue"
          ),
        meta: { title: "Alex -> UX Projects -> eco-Sparks -> Mood Board" },
      },
      {
        path: "prototype",
        name: "EcoSparkPrototype",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_prototype" */ "../components/EcoSparkPrototype.vue"
          ),
        meta: { title: "Alex -> UX Projects -> eco-Sparks -> Prototype" },
      },
      {
        path: "reflection",
        name: "EcoSparkReflection",
        component: () =>
          import(
            /* webpackChunkName: "eco_spark_reflection" */ "../components/EcoSparkReflection.vue"
          ),
        meta: { title: "Alex -> UX Projects -> eco-Sparks -> Reflection" },
      },
    ],
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: () =>
      import(/* webpackChunkName: "volunteer" */ "../views/Volunteer.vue"),
    meta: { title: "Alex -> Volunteering" },
    children: [
      {
        path: "sps",
        name: "VolunteerSPS",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_sps" */ "../components/VolunteerSPS.vue"
          ),
        meta: { title: "Alex -> Volunteering -> SPS" },
      },
      {
        path: "mymca/yes",
        name: "VolunteerMYMCAYes",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_yes" */ "../components/VolunteerMYMCAYes.vue"
          ),
        meta: { title: "Alex -> Volunteering -> MYMCA -> Yes" },
      },
      {
        path: "mymca/prsc",
        name: "VolunteerMYMCAPRSC",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_prsc" */ "../components/VolunteerMYMCASummerCamp.vue"
          ),
        meta: { title: "Alex -> Volunteering -> MYMCA -> PRSC" },
      },
      {
        path: "mymca/mentoring",
        name: "VolunteerMYMCAMentoring",
        component: () =>
          import(
            /* webpackChunkName: "volunteer_mymca_mentoring" */ "../components/VolunteerMYMCAMentoring.vue"
          ),
        meta: { title: "Alex -> Volunteering -> MYMCA -> M.Y. Mentoring" },
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
const DEFAULT_TITLE = "Alexandria Rodrigues";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
