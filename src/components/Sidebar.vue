<template>
  <div class="sidebar">
    <!-- <h3>This is the sidebar</h3>-->
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="text">My dinner</p>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
          v-bind:class="{'is-active': isOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-end">
          <div class="navbar-item is-tab">
            <p>
              People:
              <input
                type="number"
                :value="numberOfGuests"
                @input="onDidChangeNumberOfGuests"
                @change="onDidChangeNumberOfGuests"
              >
              <br>
              Total number of guests: {{ numberOfGuests }}
            </p>
            <table>
              <tr>
                <th>Dish Name</th>
                <th>Cost</th>
              </tr>
              <tr v-for="dish in menu" :id="dish.id" :key="dish.id">
                <td>{{dish.title}}</td>
                <td
                  v-if="dish.extendedIngredients"
                >{{Math.round(dishPrice(dish) * numberOfGuests)}}</td>
              </tr>
              <tr>Total:
                <td>{{Math.round(totPrice()* numberOfGuests)}}</td>
              </tr>
            </table>
            <button
              class="button"
              @click="$router.push({ name: 'Overview', params: { menu: menu }})"
            >Confirm Dinner</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["model"],
  // we define and initalise the data we want to use and modify in the component
  data() {
    return {
      numberOfGuests: this.model.getNumberOfGuests(),
      menu: this.model.getMenu(),
      isOpen: false
    };
  },
  created() {
    this.model.addObserver(this);
  },
  // this is called when component is removed destroyed
  // good place to remove observer
  beforeDestroy() {
    this.model.removeObserver(this);
  },
  methods: {
    // in our update function we modify the the property of
    // the compoented which will cause the component to re-render
    update(model, changeDetails) {
      if (changeDetails === "numberOfGuests") {
        this.numberOfGuests = this.model.getNumberOfGuests();
        localStorage.setItem("numberOfGuests", this.numberOfGuests);
      }
      if (changeDetails === "addDishToMenu") {
        this.menu = this.model.getMenu();
      }
    },

    // our handler for the input's on change event
    onDidChangeNumberOfGuests(e) {
      this.model.setNumberOfGuests(+e.target.value);
    },
    dishPrice(d){
      return this.model.getTotalDishPrice(d);
    },
    totPrice(){
      return this.model.getTotalMenuPrice();
    }
  }
};
</script>
<style>
.sidebar {
  flex-grow: 1;
  min-width: 200px;
  max-width: 25vw;
  padding: 0 2% 0 2%;
}
.navbar {
  display: flex;
  flex-direction: column;
}
.navbar-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.navbar-item > * {
  padding-bottom: 10px;
}
.navbar-end {
  margin: 5px !important;
}

th {
  text-align: left;
}
td {
  max-width: 150px;
  margin-right: 5px;
}
.text {
  margin: 10px;
}
@media screen and (max-width: 750px) {
  td {
    width: 100%;
  }
  .navbar {
    width: 90vw;
  }
}
</style>
