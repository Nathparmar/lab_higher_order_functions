const restaurants = require('./restaurants.json');
const ScranAdvisor = require('./ScranAdvisor');

let scranAdvisor;
scranAdvisor = new ScranAdvisor(restaurants);

// console.log(scranAdvisor.findRestaurantByName("Happy Lamb Hot Pot"));

// console.log(scranAdvisor.findAllRestaurants());

// console.log(scranAdvisor.findRestaurantsByLocation("Glasgow"));

console.log(scranAdvisor.findMostCommonCuisine());