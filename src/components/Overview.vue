<template>
  <div class="overview">
    <div class="menuList">
      <dishitem v-for="dish in $route.params.menu" :id="dish.id" :key="dish.id" v-bind:dish="dish" :model="model"> 
      </dishitem>
    </div>
    <div class="dishPrice"></div>
    <button class="button" @click="$router.push({ name: 'Printout', params: { menu: $route.params.menu } })">Print full menu</button>
  </div>
</template>
<script>
import DishItem from "@/components/DishItem";

export default {
  props: ["model"],
  components:{
   dishitem: DishItem
  }
};
</script>