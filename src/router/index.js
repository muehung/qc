import { createRouter, createWebHashHistory } from "vue-router";
import HomeView  from "../views/HomeContentView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/cybersec",
      component: () => import("../components/PageCybersecView.vue"),
    //   children: [
    //     {
    //         path: "/:pageId",
    //         name: "task",
    //         component: () => import("../components/PageContentView.vue"),
    //     },
    //   ],
    },
    {
      path: "/mw",
      component: () => import("../components/PageMwView.vue"),
    },
    {
      path: "/ironman",
      component: () => import("../components/PageIronmanView.vue"),
    },
    {
      path: "/itplus",
      component: () => import("../components/PageItplusView.vue"),
    },
    { 
        path: '/:pathmatch(.*)*', name: 'NotFound', component: NotFound
    },
  ],
});

export default router;