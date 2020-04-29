<template>
  <div id="hhh">
    <h2>HSFHDJKLFH</h2>
    <span>{{selectedCity.cityName}}</span>
  </div>
</template>

<script>
import hhh from "./hhh/hhh";

export default {
  name: "App2",
  data() {
    return {
      selectedCity: hhh
    };
  }
};
</script>

<style>
#hhh {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
