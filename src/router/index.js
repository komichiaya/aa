import { createRouter, createWebHistory } from "vue-router";

import { INDEX, AREA, BLOG, MORE } from "./path";
import Blog from "@/views/blog";
const routes = [
  {
    name: "index",
    path: INDEX,
    component: () => import("@/views/index"),
  },
  {
    name: "area",
    path: AREA,
    props: true,
    component: () => import("@/views/area"),
    children: [],
  },
  {
    name: "Blog",
    path: BLOG,
    props: true,
    component: () => import("@/views/blog"),
  },
  {
    name: "More",
    path: MORE,
    props: true,
    component: () => import("@/views/more"),
    children: [
      {
        path: "/:which/:id",
        component: Blog,
      },
    ],
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
