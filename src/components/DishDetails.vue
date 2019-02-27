<template>
  <div class="dishDetails">
    <sidebar :model="this.model"/>
    <div class="detailsInfo">
      <!--<p>{{$route.params.dish}}</p>-->
      <div class="nameImgDesc">
        <h1>{{this.dish.title}}</h1>
        <img :src="this.dish.image">
        <p>{{this.dish.instructions}}</p>
      </div>
      <div class="ingredientContainer">
        <h3>Ingredients for: {{numberOfGuests}} people</h3>
        <table></table>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  props: ["model", "dishId"],

  created() {
    this.model.addObserver(this);
  },

  beforeDestroy() {
    this.model.removeObserver(this);
  },
  methods: {
    update() {
      this.numberOfGuests = this.model.getNumberOfGuests();
    }
  },
  components: {
    sidebar: Sidebar
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

  data() {
    return {
      url: "https://spoonacular.com/recipeImages/",
      dish: {},
      numberOfGuests: this.model.getNumberOfGuests()
    };
  }
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