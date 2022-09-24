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