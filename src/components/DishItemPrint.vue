<template>
  <div class="container">
    <div class="item">
      <div class="dish-item-print">
        <img :src="newDish.image">
        <p class="dishTitle">{{ newDish.title }}</p>
        <p class="desc">{{ newDish.instructions }}</p>
      </div>
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

<style scoped>
.item {
  max-width: 100%;
}

.dish-item-print {
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  text-align: left;
}
.dishTitle{
  max-width: 300px;
  min-width: 300px;
  font-size: 24px;
  font-weight: bold;
}
.desc{
  max-width: 500px;
  min-width: 250px;
}
.dish-item-print > img {
  width: 500px;
  height: 70%;
}

.dish-item-print > * {
  padding: 20px;
}
</style>

