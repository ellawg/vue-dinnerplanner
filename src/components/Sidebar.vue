<template>
  <div class="sidebar">
    <h3>This is the sidebar</h3>
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
    </table>
    <button>Confirm Dinner</button>
  </div>
</template>

<script>
export default {
  props: ["model"],
  // this methods is called by React lifecycle when the
  // component is created that's a good place to setup model observer
  created() {
    this.model.addObserver(this);
  },

  // this is called when component is removed destroyed
  // good place to remove observer
  beforeDestroy() {
    this.model.removeObserver(this);
  },

  // we define and initalise the data we want to use and modify in the component
  data() {
    return {
      numberOfGuests: this.model.getNumberOfGuests()
    };
  },

  methods: {
    // in our update function we modify the the property of
    // the compoented which will cause the component to re-render
    update() {
      this.numberOfGuests = this.model.getNumberOfGuests();
    },

    // our handler for the input's on change event
    onDidChangeNumberOfGuests(e) {
      this.model.setNumberOfGuests(+e.target.value);
    }
  }
};
</script>
<style>
.sidebar {
  flex-grow: 1;
  min-width: 20vw;
  padding: 0 2% 0 2%;
}
</style>
