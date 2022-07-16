// Today's Lab :D WRITE FUNCTIONS FOR EACH!

// Write a function to convert temperatures from Fahrenheit to Celsius.
 
function convertTemp (fahrenheit){
  let celsuis =((fahrenheit - 32) * (5/9)) // input the mathematical formula for converting fahrenheit to celsuis 
  return celsuis // returns the formula we need when usuing the convert Temp formula
}

console.log(convertTemp(32)) // the 32 is the degree fahrenheit for it to be returned in celsius which will result in 0 


// Write a function that converts USD to any other currency of choice.

function convertCurrency (usd){
    let euro = (usd / 1.20)
    return euro
}

console.log(convertCurrency(100))

// // The FizzBuzz problem is a classic test given in coding interviews. 
// //The task is simple: Print integers 1 to N,  // (this is from the range 1 to n)
// //but print "Fizz" if an integer is divisible by 3, 
// //"Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

//     // function FizzBuzz(n) {
//     //     return // return is the same as "stop here"/ "done"
//     // }
//     // const FizzBuzz = (n) => {}
//     // both functions above are the same just two different ways of writing it 

// // return it in an array 
function FizzBuzz(n) {
    let results = []
    for (let i=1; i<=n; i++) {
        if (i%3===0 && i%5===0){ 
            results.push("FizzBuzz")
        } else
        if (i%3===0){
            results.push("Fizz")
        } else 
        if (i%5===0){
            results.push("Buzz")
        }
        else
        results.push(i)
    }
    return results
}

let finalResult= FizzBuzz(15)
console.log (finalResult)

// now return it in a list not in an array each in a new line
// first way converts everything into a string 
// let list= finalResult.join('\n')
// console.log(list)

// //second way keeps everything in its original value
for (let i=0;i<finalResult.length;i++){
    console.log(finalResult[i])
}

// You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart have been removed. // confused wouldn't shoppinglist have to contain a 

let shoppingList = [
    "paperTowels",
    "apples", 
    "clementimes", 
    "soap", 
    "sponge",
]
let cart = [
    "strawberries",
    "paperTowels",
    "celsuis", 
    "starbucksDrink",
]

let finalList = []


// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"
// first way of solving it 
    // let str = "the sky is blue" // this "str" is in global scope

    // function changeOrder (str) { // now "str" variable is prioritized in the block scope
    //     let originalArray = str.split("")// turning "str" (in the block scope) to a brand new array (orginalArray) that is what .split does
    //     let reverseArray = originalArray.reverse() //overriding the original array to reverseArray and returning it in reverse // this is what .reverse does
    //     let jointStr= reverseArray.join("") // this is grabbing the reverseArray and joins them with nothing in between them and returning it as a string
    //     return jointStr
    // }
    // given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

//solve the same problem but without the reverse
    let str = "the sky is blue" // this "str" is in global scope
    function changeOrder (str) { // now "str" variable is prioritized in the block scope
        let originalArray = str.split("")// turning "str" (in the block scope) to a brand new array (orginalArray) of all of the components in the str that is what .split does
        let jointStr= '' // this WILL BE our final reverse string (this line is also creating a variable (jointStr) that is making it a str )
        for (let i=originalArray.length - 1; i>=0;i--) { // initializing the position of the string (and the evaluating factor) and subtracting 1 because it will add one automatically // setting the condition to be greater than or equal to 0 and for it to CONTINUE as long as the evalating facor is greater than or equal to 0// having it go backwards in the string 
            jointStr += originalArray[i] // add the letter at the index i to the end of jointStr // += is adding to the end of the str or concatenating
        }
        return jointStr
    }

// below this line is in play for either way of solving above 
console.log(changeOrder(str))// this is the "str" in the global scope
// same as 
console.log(changeOrder("the sky is blue"))

console.log(changeOrder(str))// this is the "str" in the global scope
// same as 
console.log(changeOrder("the sky is blue")) 





// :fire:
// 1





