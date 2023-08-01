// Business Logic
function PizzaOrder(size, topping) {
  this.size = size;
  this.topping = topping;
}

PizzaOrder.prototype.calculateTotalCost = function() {
  const sizeOptions = {
    small: { name: "Small", price: 20 },
    medium: { name: "Medium", price: 25 },
    large: { name: "Large", price: 30 }
  };

  const selectedSize = sizeOptions[this.size];
  const totalPrice = selectedSize.price;
  const pizzaDescription = `${selectedSize.name} pizza with ${this.topping}`;

  return `Total Cost: $${totalPrice}. ${pizzaDescription}.`;
};

// UI Logic
function handlePizzaFormSubmit(event) {
  event.preventDefault();

  const selectedTopping = document.querySelector('input[name="topping"]:checked');
  const selectedSize = document.querySelector('select[name="size"]');

  if (selectedTopping && selectedSize) {
    const topping = selectedTopping.value;
    const size = selectedSize.value;
    const pizzaOrder = new PizzaOrder(size, topping);

    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = pizzaOrder.calculateTotalCost();
  }
}

window.addEventListener("load", function() {
  const pizzaForm = document.getElementById("pizzaForm");
  pizzaForm.addEventListener("submit", handlePizzaFormSubmit);
});
