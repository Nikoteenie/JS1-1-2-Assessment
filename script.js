// You will use this .js file to write your four coding challenges

// "Coding Challenge #1: Basketball Score"
let freeThrowPointValue = 1;
let midRangePointValue = 2;
let threePointersPointValue = 3;
function totalBasketballScore(freeThrows, midRange, threePointers) {
  if (
    typeof freeThrows === "number" &&
    typeof midRange === "number" &&
    typeof threePointers === "number"
  ) {
    return (
      freeThrowPointValue * freeThrows +
      midRangePointValue * midRange +
      threePointersPointValue * threePointers
    );
  } else {
    return "You need to input a number!";
  }
}
console.log(totalBasketballScore(2, 3, 4)); // 20
console.log(totalBasketballScore("2", 3, 4)); // You need to input a number!

// "Coding Challenge #2: Computer Store"
function itemPrice(item) {
  switch (item) {
    case "computer":
      console.log("$500");
      break;
    case "mouse":
      console.log("$10");
      break;
    case "case":
      console.log("$25");
      break;
    case "router":
      console.log("$100");
      break;
    default:
      if (typeof item != "string") {
        console.log("You need to input the name of the item.");
      } else {
        console.log("We do not carry that item :(");
      }
      break;
  }
}
itemPrice("case"); // $25
itemPrice("things"); // We do not carry that item :(
itemPrice(55); // You need to input the of the item.

// "Coding Challenge #3: What’s for dinner?"

let restaurants = [
  "Applebees",
  "Panera Bread",
  "Popeyes",
  "Chopt",
  "Chick-fil-A",
  "Cheesecake Factory",
  "Five Guys",
];

function randomRestaurant(numOfRestaurants) {
  let randomRestaurantList = [];

  for (let i = 0; i < numOfRestaurants; i++) {
    const makeRandomResturants =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    randomRestaurantList.push(makeRandomResturants);
  }
  return randomRestaurantList;
}

console.log(randomRestaurant(3)); // an array of 3 random resturants
console.log(randomRestaurant(5)); // an array of 5 random resturants

// "Coding Challenge #4: Leap Year"

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 != 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000)); //true
console.log(isLeapYear(1700)); //false

// Make sure to check that each of your challenge functions are working as expected by using console.log() statements and checking the output against what you would expect.
