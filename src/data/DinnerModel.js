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
    this.type = "all";
    this.filter = "";
    
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

  getFullMenu() {
    return this._menu;
  }

  setFilter(filter){
    this.filter = filter;
    this.notifyObservers("search")
  }
  setType(type){
    this.type= type;
    this.notifyObservers("search")
  }
  
  addDishToMenu(dish) {
		const menu = this.getFullMenu();
		let exists = false;
			menu.forEach(function(item){
				if (dish.id === item.id){
					exists = true;
				}
			})
			if (exists === false){
				menu.push(dish)
			}
			else{
				alert('Dish already in menu');
			}
	this.notifyObservers('addDishToMenu');
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

  getDish(id){
    const url = `${BASE_URL}/recipes/`+ id + `/information`;
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
