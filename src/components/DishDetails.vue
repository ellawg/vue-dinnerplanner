<template>
  <div class="dishDetails">
    <sidebar :model="this.model"/>
    <div class="detailsInfo">
      <!--<p>{{$route.params.dish}}</p>-->
      <div class="NameImgDesc">
          <h1>{{$route.params.dish.title}}</h1>
          <img :src="url + $route.params.dish.image">
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  props: ["model", "dish"],

  components: {
    sidebar: Sidebar
    
  },

  data() {
    return {
      url: "https://spoonacular.com/recipeImages/"
    };
  }
}
</script>

<style>

.dishDetails{
  display: flex;
  flex-direction: row;

}

img{
  width: 40%;
  height: 10%;
}
</style>