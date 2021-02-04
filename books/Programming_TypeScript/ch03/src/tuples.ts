let aNumber: [number] = [1]
console.log(aNumber)

let tuple: [number, boolean, string, number?] = [100, false, "oh"]
tuple[0] = 200
// tuple[1] = "nonBoolean" // can't assign a string to a boolean
console.log(tuple)
tuple[3] = 500
console.log(tuple)

// minimum length
let amounts: [number, ...number[]] = [103.33, 2344]
console.log(amounts)
