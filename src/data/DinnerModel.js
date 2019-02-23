import ObservableModel from "./ObservableModel";
import apiKey from "./apikey.js";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/35";
const httpOptions = {
  headers: { "X-Mashape-Key": apiKey }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 4;
    this.getNumberOfGuests();
    this._menu = [];
    this.getFullMenu();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    this.notifyObservers();
  }

  /**
   * Get the menu
   * @returns {array}
   */
   getFullMenu(){
     return this._menu;
   }

   /**
   * Add dish to menu
   * @param {object} dish
   */
  addDishToMenu(dish){
    this._menu.push(dish)
    this.notifyObservers();
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
