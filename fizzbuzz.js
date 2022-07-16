// Today's Lab :D WRITE FUNCTIONS FOR EACH!

// Write a function to convert temperatures from Fahrenheit to Celsius.

// function convertTemp (fahrenheit){
//   let newtemp = (fahrenheit - 32) * 5/9
//   return newtemp
// }

// console.log(fahrenheit(32))


// Write a function that converts USD to any other currency of choice.


// The FizzBuzz problem is a classic test given in coding interviews. 
//The task is simple: Print integers 1 to N,  // (this is from the range 1 to n)
//but print "Fizz" if an integer is divisible by 3, 
//"Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

// function FizzBuzz(n) {
//     return // return is the same as "stop here"/ "done"
// }
// const FizzBuzz = (n) => {}
// both functions above are the same just two different ways of writing it 

// return it in an array 
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


// You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart have been removed.

// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"
// :fire:
// 1





