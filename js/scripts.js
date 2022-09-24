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
  this.price = 0.00;
}

Pizza.prototype.addTopping = function(toppings) {
  let pizzaArray = [];

  for (let i = 0; i < this.pizzaToppings.length - 1; i++) {
    pizzaArray.push(toppings[i].toUpperCase());
  }
  this.pizzaToppings = pizzaArray;
  return this.pizzaToppings;
};

Pizza.prototype.calculateCost = function(size) {
  let costTracker = 0.00;

  if (size === "small") {
    costTracker = 4.00;
  }

  if (size === "medium")  {
    costTracker = 6.00;
  }

  if (size === "large") {
    costTracker = 8.00;
  }

  for (let i = 0; i < this.pizzaToppings.length; i++) {
    if (this.pizzaToppings[i] === "PEPPERONI")  {
      costTracker += 1.00;
    } 
    
    if  (this.pizzaToppings[i] === "PEPPERJACK")  {
      costTracker += 1.00;
    }

    if  (this.pizzaToppings[i] === "OLIVES")  {
      costTracker += 0.50;
    }

    if  (this.pizzaToppings[i] === "TOMATOES")  {
      costTracker += 0.50;
    }

    if (this.pizzaToppings[i] === "BACON")  {
      costTracker += 1.00;
    }

    if (this.pizzaToppings[i] === "CHICKEN")  {
      costTracker += 1.00;
    }

    if (this.pizzaToppings[i] === "MOZARELLA")  {
      costTracker += 1.00;
    }
  }
  this.price = costTracker;
  return this.price;
};


// UI Logic