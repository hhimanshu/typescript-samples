let d = [1, 'a'] // (string | number)[]
// d.push(true) // can't push a value of boolean type to parameter string | number
let result = d.map(_ => typeof _ === 'number' ? _ * 3 : _.toUpperCase())
console.log(result)

let immutableA: readonly number[] = [1, 2, 3, 4, 5]
let subset: readonly number[] = immutableA.slice(1, 4)
console.log(immutableA)
console.log(subset)
