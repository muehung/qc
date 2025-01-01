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
      path: "/pcschool",
      component: () => import("../components/PagePcschoolView.vue"),
    },
    { 
        path: '/:pathmatch(.*)*', name: 'NotFound', component: NotFound
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 如果有保存的位置，滾動到保存的位置
    } else if (to.hash) {
      // console.log(to);
      return {
        el: to.hash, // 滾動到指定的 hash 元素
        behavior: "smooth", // 平滑滾動
      };
    } else {
      return { top: 0 }; // 預設滾動到頂部
    }
  },
});

export default router;