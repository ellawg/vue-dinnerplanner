   <template>
  <div class="overview">
    <div class="menuList"></div>
    <div class="dishPrice">{{menu}}</div>
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
export default {
  props: ["model", "menu"],
  mounted() {
        console.log(this.menu);
  }
};
</script>