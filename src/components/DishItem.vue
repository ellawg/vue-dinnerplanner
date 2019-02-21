<template>
  <div class="item">
    <img :src="url + dish.image">
    <p>{{ dish.title }}</p>
    <button @click="console.log('click')">Add dish to menu</button>
  </div>
</template>

<script>
export default {
  props: ["dish"],
  data() {
    return {
      url: "https://spoonacular.com/recipeImages/"
    };
  }
};
</script>
