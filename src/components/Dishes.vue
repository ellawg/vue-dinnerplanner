<template>
  <div class="dish-container">
    <h3>Dishes</h3>
    <div class="columns">
      <em v-if='status === "LOADING"'>Loading...</em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <dishitem v-for="dish in dishes" :id="dish.id" :key="dish.id" v-bind:dish="dish" :model="model"> </dishitem>
    </div>
  </div>
</template>

<script>
  // Alternative to passing the moderl as the component property,
  // we can import the model instance directly
  import modelInstance from "../data/DinnerModel";
  import DishItem from "@/components/DishItem";

  export default {  
    props: ["model"],
    components: {
      dishitem: DishItem
    },
    // this methods is called by Vue lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render
      modelInstance.getAllDishes().then(dishes => {
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch(() => {
        this.status = "ERROR"
      })
      modelInstance.addObserver(this);
    },
    data() {
      return {
        status: "LOADING",
        dishes: []
      }
    },
    methods:{

      update(model, changeDetails){
        if (changeDetails ==="search"){
        modelInstance.getAllChosenDishes().then(dishes => {
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch(() => {
        this.status = "ERROR"
      })
        }
      }
    }
  }
</script>
<style>
.item{
    min-width: 190px;
    max-width: 190px;
    height: 230px;
    margin: 20px;
    text-align: center;
}

.item img{
    width: 100%;
    height: 70%;
}

.dish-container{
  max-width: 70vw;
}

</style>
