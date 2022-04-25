import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import(/* webpackChunkName: "layout" */ "../views/layout"),
    children: [
      {
        path: "/perfil",
        name: "perfil",
        component: () =>
          import(/* webpackChunkName: "perfil" */ "../views/perfil"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/login"),
  },
  {
    path: "/recuperar-password",
    name: "recuperar-password",
    component: () => import(/* webpackChunkName: "recuperarPassword" */ "../views/recuperarPassword"),
  },
  {
    path: "/reset-password/:id",
    name: "reset-password",
    component: () => import(/* webpackChunkName: "resetPassword" */ "../views/resetPassword"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/establecimientos",
    name: "establecimientos",
    component: () =>
      import(/* webpackChunkName: "establecimientos" */ "../views/establecimientos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
