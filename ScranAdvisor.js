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

ScranAdvisor.prototype.findRestaurantsByLocation = function(){

    const location = this.restaurants.filter((restaurant) => {

        return restaurant.location.town;
    });
    

    // const evenNumbers = numbers.filter((number) => {
    //     return number % 2 === 0;
    // });
    
}

module.exports = ScranAdvisor;

