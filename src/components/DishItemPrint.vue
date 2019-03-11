<template>
  <div class="item">
    <div class="dish-item-print">
      <img :src="newDish.image">
      <p>{{ newDish.title }}</p>
      <p>{{ newDish.instructions }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["model", "dish"],
  data() {
    return {
      newDish: {}
    };
  },
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    this.model
      .getDish(this.dish.id)
      .then(dish => {
        this.status = "LOADED";
        this.newDish = dish;
      })
      .catch(() => {
        this.status = "ERROR";
      });
    this.model.addObserver(this);
  }
};
</script>
