Describe: Pizza(toppings,size)

Test: "Input a string into toppings and size, it should output the Pizza object with the passed in arguments."
Code: 
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
}
Expected Output: size: "Large", Toppings: "Tomatoes".

Describe: Pizza.prototype.addTopping(toppings)

Test: "Input an array of multiple items and pass it in as an argument. It should successfully append multiple strings to the array."
Code: 
Pizza.prototype.addTopping = function(toppings) {
  this.pizzaToppings.push(toppings);
  return this.pizzaToppings;
};
Expected Output: ["Tomatoes","Pepperoni","Cheese"]

Test: "My previous test was only able to pass through strings but not arrays. With the updated code, you should now be able to pass in an array. Later I will pass in an array of checkbox values that will get passed in and stored in the toppings."
Code: 
Pizza.prototype.addTopping = function(toppings) {
  let pizzaArray = [];

  for (let i = 0; i < this.pizzaToppings.length - 1; i++) {
    pizzaArray.push(toppings[i]);
  }
  this.pizzaToppings = pizzaArray;
  return this.pizzaToppings;
};
Expected Output: ["Tomatoes","cheese","meat","duck egg"]

Describe: Pizza.prototype.calculateCost(toppings,size)

Test: "I test to see if the prototype is able to successfully iterate through the array and able to add to the price. Then return the new price."
Code: Pizza.prototype.calculateCost = function(size) {...}
  let costTracker = 0.00;
Expected Output: 3.00