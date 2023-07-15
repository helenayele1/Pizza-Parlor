Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.price()

Test: "It should set the total price based on the size of the pizza"
Code: const mPizza = new Pizza(["veggie", "cheese", "peperonni"], "medium")
console.log(myPizza.totalPrice);
Output: 25$