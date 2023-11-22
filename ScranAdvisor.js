const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

ScranAdvisor.prototype.countNumberOfRestaurants = function(){
    
     return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurantByName = function(name){
        
   
    for (i = 0; i < this.restaurants.length; i++) {
        let restaurant = this.restaurants[i];
        if (restaurant.name === name) {
            return restaurant; 
        }
    }

    

    // this.restaurants.find(restaurant => restaurant.name === name);
};

ScranAdvisor.prototype.findAllRestaurants = function(){
        
    const restaurantNames = this.restaurants.map((restaurant) => {
        return restaurant.name;
    });

    return restaurantNames;

}

ScranAdvisor.prototype.findRestaurantsByLocation = function(town){

    const restaurants = this.restaurants.filter((restaurant) => {

        return restaurant.location.town === town;
    });
    
    return restaurants;

}

ScranAdvisor.prototype.findMostCommonCuisine = function(){
   
    
    
    
    
    
    const cuisines = this.restaurants.forEach((restaurant) => {
        return restaurant.cuisine;
    });

    return cuisines;

    // numbers.forEach((element) => {console.log(element);});
}

ScranAdvisor.prototype.searchByName = function(name){

}

module.exports = ScranAdvisor; 

