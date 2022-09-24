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