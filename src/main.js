import Vue from "vue";
import App from "./App.vue";
//import App2 from "./App2.vue";
import hhh from "./hhh/hhh";
import cityRepository from "./hhh/cityRepository";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   render: h => h(App2)
// }).$mount("#hhh");

//App initialization

hhh.loadUserCity().then(userCity => {
  console.log("resolved");
  hhh.saveCity(userCity);
});
cityRepository.fetchCities();
