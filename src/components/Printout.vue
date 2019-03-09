<template>
  <div class="printout">
    <div class="menuList">
      <dishitemprint v-for="dish in menu" :id="dish.id" :key="dish.id" v-bind:dish="dish" :model="model">
      </dishitemprint>
    </div>    
  </div>
</template>

<script>
import DishItemPrint from "@/components/DishItemPrint";

export default {
  props: ["model"],
    data(){
        return{
            menu: this.$route.params.menu
        }
    },
  components:{
   dishitemprint: DishItemPrint
  }
}
</script>