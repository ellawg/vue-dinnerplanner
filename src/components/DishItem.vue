<template>
  <div class="item">
      <div class="item-link" @click="$router.push({ name: 'DishDetails', params: { dishId: dish.id } })">
        <img :src="url + dish.image">
        <p>{{ dish.title }}</p>
      </div>
    
  </div>
</template>

<script>
export default {
  props: ["model", "dish"],
  data() {
    return {
      url: ""
    };
  },
  mounted(){
    if (this.dish.image.includes('https')){
      this.url = "";
    }
    else{
      this.url = "https://spoonacular.com/recipeImages/";
    }
  }
};
</script>
