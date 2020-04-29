export default {
  cityName: null,
  cityCode: null,
  setCity(city) {
    this.cityName = city.Name;
    this.cityCode = city.Code;
  },
  saveCity(city) {
    this.setCity(city);
    localStorage.setItem("userCity", { Code: city.Code, Name: city.Name });
  },
  loadUserCity() {
    let city = localStorage.getItem("userCity");
    if (city) {
      return Promise.resolve(city);
    } else {
      return this.detectCity();
    }
  },
  detectCity() {
    return new Promise(function(resolve, reject) {
      //Эмуляция асинхронной функции
      setTimeout(() => {
        resolve({ Code: "81", Name: "DetectedCity" });
      }, 3000);
    });
  }
};
