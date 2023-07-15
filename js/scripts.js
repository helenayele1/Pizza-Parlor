window.onload = function() {
event.preventDefault()
};

//Pizza constructor
const PizzaToppings = function(["veggie", "pepperoni", "cheese"], medium) {
    this.veggie = veggie
    this.peperroni = perperoni
    this.cheese = cheese
   
};

const sizeOptions = {
    small: { name: "Small", price: 20 },
    medium: { name: "Medium", price: 25 },
    large: { name: "Large", price: 30 }
};

Pizza.prototype.price = function() {
    //get the price based on selected size
    const selectedSize = sizeOptions[this.size]
    this.totalPrice = selectedSize.price;
};

