import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import SelectDish from "@/components/SelectDish";
import DishDetails from "@/components/DishDetails";
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
      path: "/details",
      name: "DishDetails",
      component: DishDetails,
      props: { model: modelInstance }
    }
  ]
});
