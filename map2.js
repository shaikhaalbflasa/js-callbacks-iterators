let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

let square = numbers.map (number =>
    number*number
)

console.log(square)
  
let largerthanthirty = square.filter (number => 
    number >30
)

console.log(largerthanthirty)
  
  largerthanthirty.forEach (number => 
    console.log(`${number} is larger than 30`)
)