<template>
  <div class="item">
      <div class="dish-item-print">
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
      url: "https://spoonacular.com/recipeImages/"
    };
  }
};
</script>
