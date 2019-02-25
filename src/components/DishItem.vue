<template>
  <div class="item">
      <div class="item-link" @click="$router.push({ name: 'DishDetails', params: { dish: dish } })">
        <img :src="url + dish.image">
        <p>{{ dish.title }}</p>
      </div>
    <button @click="onDidChangeMenu">Add dish to menu</button>
  </div>
</template>

<script>
export default {
  props: ["model", "dish"],
  data() {
    return {
      url: "https://spoonacular.com/recipeImages/"
    };
  },
  methods: {
    // in our update function we modify the the property of
    // the compoented which will cause the component to re-render
    update() {
      this.menu = this.model.getFullMenu();
    },

    // our handler for the input's on change event
    onDidChangeMenu() {
      this.model.addDishToMenu(this.dish);
      //this.model.addDishToMenu(this.dish.id);
    }
  }
};
</script>
