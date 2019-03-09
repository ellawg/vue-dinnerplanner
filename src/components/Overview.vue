<template>
  <div class="overview">
    <div class="menuList">
      <dishitem v-for="dish in $route.params.menu" :id="dish.id" :key="dish.id" v-bind:dish="dish" :model="model"> 
      </dishitem>
    </div>
    <div class="dishPrice"></div>
    <button class="button" @click="$router.push({ name: 'Printout', params: { menu: $route.params.menu } })">Print full menu</button>
    
  </div>
</template><!--
    var menuList = $("<div/>").addClass("menuList");
    var dishPrice = $("<div/>").addClass("dishPrice");
    container.append(menuList);

    this.printButton =  $("<button/>").addClass("button").attr('id', 'printMenuButton').html('Print full menu');

    var updates = () => {
        const menu = model.getFullMenu();
        menuList.empty();
        dishPrice.empty();

        menu.forEach(function (j) {
            if (j !== undefined) {
                menuList.append(dishPrice);
                new DishItemView(this, $(".dishPrice"), j, model, true, app);
            }
        });
        menuList.append('<hr/> <p class="price">' + 'Total: ' + model.getTotalMenuPrice() + ' SEK </p>');
        container.append(this.printButton);
    }-->
<script>
import DishItem from "@/components/DishItem";

export default {
  props: ["model"],
  components:{
   dishitem: DishItem
  }
};
</script>