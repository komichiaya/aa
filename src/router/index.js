import { createRouter, createWebHistory } from "vue-router";

import Blog from "@/views/blog";
const routes = [
  {
    name: "index",
    path: "/index",
    component: () => import("@/views/index"),
  },
  {
    name: "area",
    path: "/area/:country",
    props: true,
    component: () => import("@/views/area"),
    children: [],
  },
  {
    name: "Blog",
    path: "/area/:country/blog/:which/:id",
    props: true,
    component: () => import("@/views/blog"),
  },
  {
    name: "More",
    path: "/area/:country/more/:which",
    props: true,
    component: () => import("@/views/more"),
  },

  {
    path: "/",
    redirect: "/index",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
