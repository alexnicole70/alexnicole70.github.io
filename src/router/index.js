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
});

export default router;
