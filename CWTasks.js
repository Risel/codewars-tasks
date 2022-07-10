// 1 

//Your task is to make a function that can take any non-negative integer as an argument and 
//return it with its digits in descending order. Essentially, rearrange the digits to create 
//the highest possible number.

function descendingOrder(n){
  const myArr = String(n).split("").map((n)=>{
    return Number(n)
  })
  const sortedArr = myArr.sort((a,b)=>b-a)
  return Number(sortedArr.join(''))
}

//missunderstood the task, but I did it like this :D 

//2

//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.

const summation = (num) => {
  let sum = 0
  for (let i = 0; i<=num; i++){
    sum += i
  }
  return sum
}

//3

//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  switch(operation) {
    case "+":
      return value1+value2
    break;
    case "-":
      return value1-value2
    break;
    case "*":
      return value1*value2
    break;
    case "/":
      return value1/value2
    break;
    default: 
      return "Wrong operation"
  }
}

//4

//Your task is to create the functionisDivideBy (or is_divide_by) to check if an 
//integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
  if(number%a===0 && number%b===0){
    return true;
  } else {
    return false;
  }
}

//5 

//Complete the method that takes a boolean value and return a "Yes" string for true, or 
// "No" string for false.

const boolToWord = (bool) => bool ? "Yes" : "No"

//6 

//Your task is to make two functions ( max and min, or maximum and minimum, etc., 
//depending on the language ) that receive a list of integers as input, and 
//return the largest and lowest number in that list, respectively.

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


//7

//You were camping with your friends far away from home, but when it's time to go back, you realize 
//that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
//your car runs on about 25 miles per gallon. There are 2 gallons left.

//Considering these factors, write a function that tells you if it is possible to get to the pump 
//or not.

//Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg > fuelLeft ? false : true

//8

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => arr.reduce((acc, item)=> item>0 ? acc+item : acc, 0)