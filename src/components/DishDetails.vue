<template>
  <div class="dishDetails">
    <sidebar :model="this.model"/>
    <div class="detailsInfo">
      <div class="nameImgDesc">
        <h1>{{dish.title}}</h1>
        <img :src="dish.image">
        <p>{{dish.instructions}}</p>
      </div>
      <div class="ingredientContainer">
        <h3>Ingredients for: {{numberOfGuests}} people</h3>
        <table></table>
      </div>
      <router-link to="/search">
        <button class="button">Back to search</button>
      </router-link>
      <button class="button" @click="onDidChangeMenu">Add dish to menu</button>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  props: ["model", "dishId"],
  components: {
    sidebar: Sidebar
  },
    data() {
    return {
      url: "https://spoonacular.com/recipeImages/",
      dish: {},
      numberOfGuests: this.model.getNumberOfGuests()
    };
  },
  created() {
    this.model.addObserver(this);
  },
  beforeDestroy() {
    this.model.removeObserver(this);
  },
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    this.model
      .getDish(this.$route.params.dishId)
      .then(dish => {
        this.status = "LOADED";
        this.dish = dish;
      })
      .catch(() => {
        this.status = "ERROR";
      });
    this.model.addObserver(this);
  },
  methods: {
    update(model, changeDetails) {
      if (changeDetails === "numberOfGuests") {
        this.numberOfGuests = this.model.getNumberOfGuests();
      }
    },
    // our handler for the input's on change event
    onDidChangeMenu() {
      this.model.addDishToMenu(this.dish);
    }
  },
};
</script>

<style>
.dishDetails {
  display: flex;
  flex-direction: row;
}

img {
  width: 40%;
  height: 10%;
}
</style>