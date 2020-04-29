export default {
  cities: [], //Эту переменную слушает компонент со списком городов
  fetchCities() {
    //Функция, которая загружает города
  },
  /**
   * Returns a promise, found city will be in resolve
   *
   * @param {*} code
   * @return Promise
   */
  findCity(code) {
    //......
  }
};
