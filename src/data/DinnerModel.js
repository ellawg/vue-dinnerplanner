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
    this.menu = [];
    this.type = "all";
    this.filter = "";
    
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
  setDishId(id) {
		this.dishId = id;
		this.notifyObservers('dishDetailsId');
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
  getAllChosenDishes() {
    const url = `${BASE_URL}/recipes/search?number=10&offset=0&type='`+ this.type +`&query=` + this.filter;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getDish (id) {
    const url = `${BASE_URL}/recipes/`+ id +`/information`;
    return fetch(url, httpOptions
  ).then(this.processResponse);

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
