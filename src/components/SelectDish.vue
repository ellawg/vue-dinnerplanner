<template>
  <div class="select-dish">
    <h2>This is the Select Dish screen</h2>
    <div class="columns">
      <!-- We pass the model as property to the Sidebar component -->
      <sidebar :model="this.model"/>
      <dishes/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Dishes from "@/components/Dishes";

export default {
  props: ["model"],
  components: {
    sidebar: Sidebar,
    dishes: Dishes
  }
};
</script>
<style>

</style>