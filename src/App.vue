<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld :selectedCity="selectedCity"/>
    <span>{{selectedCity.cityName}}</span>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import hhh from "./hhh/hhh";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      selectedCity: hhh
    };
  } //,
  //mounted() {
  // setTimeout(() => {
  //   hhh.setCity({ Name: "bar", Code: "21" });
  // }, 5000);
  //}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
