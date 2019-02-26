<template>
  <div class="select-dish">
    <h2>This is the Select Dish screen</h2>
    <div class="vue-columns">
      <!-- We pass the model as property to the Sidebar component -->
      <sidebar :model="this.model"/>
      <div class="search-dishes">
        <h1>Find a Dish</h1>
        <div class="search-bar">
          <input v-model="filter" class="input" id="searchInput" type="text" placeholder="Enter key words" value @keyup.enter="Search()">
          <form class="select">
            <select id="typeOption" v-model="type" @keyup.enter="Search()">
              <option value="all">All</option>
              <option value="side dish">Side dish</option>
              <option value="main course">Main course</option>
              <option value="dessert">Dessert</option>
              <option value="appetizer">Appetizer</option>
              <option value="salad">Salad</option>
              <option value="bread">Bread</option>
              <option value="breakfast">Breakfast</option>
              <option value="soup">Soup</option>
              <option value="beverage">Beverage</option>
              <option value="sauce">Sauce</option>
              <option value="drink">Drink</option>
            </select>
          </form>
          <button class="button" type="button" id="searchBtn" v-on:click="Search()">Search</button>
        </div>
        <dishes :model="this.model"/>
      </div>
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
  },
  data() {
    return {
      type: "all",
      filter: "",
    }
  },
  methods: {
    Search(){
      this.model.setFilter(this.filter);
      this.model.setType(this.type);
    }
  }
};
</script>
<style>
.select-dish{
  padding: 0 0 0 2%;
}


.search-dishes {
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  padding: 2% 0 0 0;
}
.search-bar {
  display:flex;
  flex-direction: row;
}
</style>