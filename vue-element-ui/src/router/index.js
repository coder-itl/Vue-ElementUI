import Vue from "vue";
import VueRouter from "vue-router";

// 一级路由
const Login = () => import("views/login/Login.vue");
const Home = () => import("views/home/Home.vue");

// 二级路由
const Index = () => import("views/home/childCom/Index.vue");
const Stats = () => import("views/home/childCom/Stats.vue");
const Wms = () => import("views/home/childCom/Wms.vue");

// 三级路由
const List = () => import("views/home/childCom/List.vue");

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/login", component: Login },
  {
    path: "/home",
    component: Home,
    // TODO: 二级路由 的 path 不需要添加 /
    children: [
      { path: "/", redirect: "/home/index" },
      { path: "index", name: "index", component: Index },
      { path: "stats", name: "stats", component: Stats },
      {
        path: "wms",
        name: "wmslist",
        component: Wms,
        children: [{ path: "/wms/list", name: "list", component: List }]
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;
