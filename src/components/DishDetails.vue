<template>
  <div class="dishDetails">
    <sidebar :model="this.model"/>
    <div class="detailsInfo">
      <div class="nameImgDesc">
        <h1>{{dish.title}}</h1>
        <img :src="dish.image">
        <p>{{dish.instructions}}</p>
      </div>
      <div class="ingredientsContainer">
        <p>Ingredients for: {{numberOfGuests}} people</p>
        <table>
          <tr v-for="dishItem in dish.extendedIngredients" :key="dishItem.id">
            <td>{{dishItem.amount}} {{dishItem.unit}}</td>
            <td>{{dishItem.name}}</td>
            <td>{{dishItem.amount * numberOfGuests + ' SEK'}}</td>
          </tr>
        </table>
       
        <div class="buttons">
        <router-link to="/search">
          <button class="button">Back to search</button>
        </router-link>
        <button class="button" @click="onDidChangeMenu">Add dish to menu</button>
        </div>
      </div>
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
  }
};
</script>

<style>
.dishDetails {
  display: flex;
  flex-direction: row;
}
.detailsInfo {
  display: flex;
  flex-direction: row;
  margin: 20px;
}
.nameImgDesc{
  display: flex;
  flex-direction: column;
}
.ingredientsContainer{
  display: flex;
  flex-direction: column;
  margin: 20px;
  
}
.ingredientsContainer > {
  padding:200px;
}
p {
  width:70%;
}

img {
  width: 40%;
  height: 10%;
}

.ingredientsContainer > table{
padding: 12vw;
width: 24vw;
}
</style>