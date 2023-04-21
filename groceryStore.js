//Create an array containing the names of all items in the inventory.
let groceryItems=["watermelons","cabbages","oranges","cucumbers"];

// Create a separate array with the corresponding stock quantities of each item.
let itemQuantity=[24,11,49.15];

// Write a function to add a new item to the inventory, updating both arrays.
function groceryList(groceryItems,itemQuantity){
    if(groceryItems.length==itemQuantity || groceryItems.length>0 || itemQuantity.length>0){
        return Object.assign(...groceryItems.map((g,i)=>({[g]: itemQuantity[i]})));
    }
        return null;
}
let newGroceryItems=groceryList(groceryItems,itemQuantity);
newGroceryItems.apples=44;
console.log({newGroceryItems});

// Write a function to update the stock quantity of an existing item.
let updateitem=()=>{
    newGroceryItems[newObject]=newValue;
    console.log(newGroceryItems);
}
let newObject="apples";
let newValue=44;

updateitem()

// Write a function to calculate the total number of items in the inventory.
let totalItems=()=>{
    let total=0;
    for (let key in newGroceryItems){
    ++total;
}
console.log(total);
}
totalItems();

// Write a function to find the item with the lowest stock quantity.
var keys=Object.keys(newGroceryItems);

var lowestKey=keys[0];
for (var i=1;i<=keys.length-1;i++){
    var lowest=newGroceryItems[lowestKey];
    var value=newGroceryItems[keys[i]];
    if(lowest>value)lowestKey=keys[i];
}
console.log(lowestKey,newGroceryItems[lowestKey]);