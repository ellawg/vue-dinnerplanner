<template>
  <div id="app">
    <div class="header">
      <h1 id="app-header">Dinner Planner</h1>
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
@import url('https://fonts.googleapis.com/css?family=Roboto:300');
body{
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

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

#app-header{
  font-size: 1.1em;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 20px;

}
</style>
