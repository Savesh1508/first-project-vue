import { createRouter, createWebHistory } from "vue-router";
import { layoutMiddleware } from "./middleware";
import {
  RT_HOME,
  MT_HOME,
  RT_NASR,
  MT_NASR,
  RT_NAZM,
  MT_NAZM,
  RT_POSTS,
  MT_POSTS,
  RT_FORUM,
  MT_FORUM,
  RT_LOGIN,
  MT_LOGIN,
  RT_404,
  MT_404
} from "../constants/routeNames";

import Home from "../pages/HomeView.vue";
import BookDetails from "../pages/BookDetails.vue";
import Login from "../pages/LoginView.vue";
import Nasr from "../pages/NasrView.vue";
import Nazm from "../pages/NazmView.vue";
import Posts from "../pages/PostsView.vue";
import Forum from "../pages/ForumView.vue";

import store from "../store";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: true,
        title: MT_HOME,
      },
    },
    {
      path: "/book/:id",
      name: "BookDetails",
      component: BookDetails,
      meta: {
        requiresAuth: true,
        title: "Details"
      },
      props: true
    },
    {
      path: "/nasr",
      name: RT_NASR,
      component: Nasr,
      meta: {
        requiresAuth: true,
        title: MT_NASR,
      },
    },
    {
      path: "/nazm",
      name: RT_NAZM,
      component: Nazm,
      meta: {
        requiresAuth: true,
        title: MT_NAZM,
      },
    },
    {
      path: "/posts",
      name: RT_POSTS,
      component: Posts,
      meta: {
        requiresAuth: true,
        title: MT_POSTS,
      },
    },
    {
      path: "/forum",
      name: RT_FORUM,
      component: Forum,
      meta: {
        requiresAuth: true,
        title: MT_FORUM,
      },
    },
    {
      path: "/login",
      name: RT_LOGIN,
      component: Login,
      meta: {
        title: MT_LOGIN,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: "RT_404",
      component: () => import('../pages/errors/404.vue'),
      meta: {
        title: MT_404,
        layout: "NotFound",
      },
    }
  ],
});

function decodeJwt(token) {
  if (token) {
    const base64Payload = token.split('.')[1];
    const payloadBuffer = window.atob(base64Payload);
    return JSON.parse(payloadBuffer.toString());
  } else {
    return { exp: 0 };
  }
}


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("refresh_token");
  const parsedToken = decodeJwt(token)
  const isTokenExpired = parsedToken.exp < Date.now() / 1000

  if (to.name !== RT_LOGIN && isTokenExpired) {
    store.commit("LOGOUT")
  } else if (!isTokenExpired && to.name === RT_LOGIN){
    next({ name: from.name });
  } else {
    next();
  }
});

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;
