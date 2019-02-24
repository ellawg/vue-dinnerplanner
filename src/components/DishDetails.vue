<template>
  <div class="dishDetails">
    <h2>This is the Dish Details screen</h2>
    <div class="columns">
      <sidebar :model="this.model"/>
      <div class="Details">
        <em v-if='status === "LOADING"'>Loading...</em>
        <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
        <div class="ImageDescription">
          <!--<h2>{{this.dish.title}}</h2>
          <img id="image" v-bind:src="this.dish.image">-->
        </div>
        <div class="Ingredients"> 
            <table></table>
        </div>
        <button @click="onDidChangeMenu">Add dish to menu</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Dishes from "@/components/Dishes";
import DishItem from "@/components/DishItem";

export default {
  props: ["model","dish"],

  data() {
    return {
      url: "https://spoonacular.com/recipeImages/"
    };
  },

  components: {
    sidebar: Sidebar,
    dishes: Dishes,
    dishitem: DishItem
  },
  methods: {
      onDidChangeMenu() {
      this.model.addDishToMenu(this.dish);

    }
  }
};
</script>

<style>
</style>

