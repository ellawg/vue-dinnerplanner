import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import SelectDish from "@/components/SelectDish";
import DishDetails from "@/components/DishDetails";
import Overview from "@/components/Overview";
import Printout from "@/components/Printout";
import modelInstance from "@/data/DinnerModel";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/search",
      name: "SelectDish",
      component: SelectDish,
      props: { model: modelInstance }
    },
    {
      path: "/dishdetails",
      name: "DishDetails",
      component: DishDetails,
      props: { model: modelInstance }
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
      props: { model: modelInstance }
    },
    {
      path: "/printout",
      name: "Printout",
      component: Printout,
      props: { model: modelInstance }
    }
  ]
});
