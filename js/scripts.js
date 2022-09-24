// Business Logic for Pizza Object
function Pizza(toppings,size) {
  this.pizzaToppings = toppings;
  this.size = size;
}

Pizza.prototype.addTopping = function(toppings) {
  this.pizzaToppings.push(toppings);
  return this.pizzaToppings;
};