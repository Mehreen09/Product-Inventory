//PART 1
var products = [
  {
      name: "Bag",
      price: 1000,
      ineventory: {
          stock: 100,
          colorOptions: ["red", "brown", "white", "black"]
      }
  },
  {
      name: "watch",
      price: 5000,
      ineventory: {
          stock: 200,
          colorOptions: ["red", "brown", "white", "black"]
      }
  },
  {
      name: "shoes",
      price: 6000,
      ineventory: {
          stock: 300,
          colorOptions: ["red", "brown", "white", "black"]
      }
  }
];
function changeColor(products, newColor) {
  var colorChange = products.ineventory.colorOptions.indexOf(newColor);
  if (colorChange !== -1) {
      switch (newColor) {
          case "red":
              products.price *= 1.1; 
              break;
          case "blue":
              products.price *= 0.95; 
              break;
          default:
              break;
      }
      ;
      products.ineventory.colorOptions.splice(colorChange, 1);
      products.ineventory.colorOptions.unshift(newColor);
  }
  else {
      console.log("Colour : ".concat(newColor, " is not available for ").concat(products.name));
  }
  ;
}
;
console.log("\n \t \t ***Product Inventory Details*** \n");
products.forEach(function (products) {
  console.log("Product Name : ".concat(products.name));
  console.log("Product Price : ".concat(products.price.toFixed(2)));
  console.log("Stock : ".concat(products.ineventory.stock));
  console.log("Available Colours : ".concat(products.ineventory.colorOptions.join(","), " \n "));
});
console.log("\n Testing Of Change Colour Function for red  ");
changeColor(products[2], "red"); 
console.log(products[2]);
console.log("\n Testing Of Change Colour Function for blue  ");
changeColor(products[0], "blue"); 
console.log(products[0]);