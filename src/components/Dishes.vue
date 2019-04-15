<template>
  <div class="dish-container">
   <!-- <h3>Dishes</h3> -->
    <div class="vue-columns">
      <em v-if='status === "LOADING"'>
        <img class="loader" src="../loader.gif">
      </em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <dishitem v-for="dish in dishes" :id="dish.id" :key="dish.id" v-bind:dish="dish" :model="model"> </dishitem>
    </div>
  </div>
</template>

<script>
  import DishItem from "@/components/DishItem";

  export default {  
    props: ["model"],
    components: {
      dishitem: DishItem
    },
    mounted() {
      this.model.getAllDishes().then(dishes => {
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch((error) => {
        alert("Oh nooo something went wrong! :( \n" + error);
        this.status = "ERROR"
      })
      this.model.addObserver(this);
    },
    data() {
      return {
        status: "LOADING",
        dishes: []
      }
    },
    methods:{
      update(model, changeDetails){
        if (changeDetails === "search"){
        this.model.getAllChosenDishes().then(dishes => {
        this.status = "LOADED"
        this.dishes = dishes.results
      }).catch((error) => {
        alert("Oh nooo something went wrong! :( \n" + error);
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
  margin: 20px;
  text-align: center;
}
.item-link{
  height: 230px;
}

.item-link img{
  width: 100%;
  height: 70%;
}

.dish-container{
  max-width: 70vw;
}
.loader{
  margin: 20px;
}

</style>
