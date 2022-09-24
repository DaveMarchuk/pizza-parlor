// Utility Logic
function isEmpty()  {
  for (let i = 0; i < arguments.length; i++)  {
    if (arguments[i].length === 0)  {
      return true;
    }
  }
  return false;
}

// Business Logic for Pizza Object
function Pizza(toppings,size) {
  this.pizzaToppings = toppings;
  this.size = size;
}

Pizza.prototype.addTopping = function(toppings) {
  let pizzaArray = [];

  for (let i = 0; i < this.pizzaToppings.length - 1; i++) {
    pizzaArray.push(toppings[i]);
  }
  this.pizzaToppings = pizzaArray;
  return this.pizzaToppings;
};