<template>
  <div id="app">
    <div class="header">
      <h1>Dinner Planner</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.header{
  display: flex;
  justify-content: center;
  background-color: bisque;
  color: blue;
  margin:0;
}

.columns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
