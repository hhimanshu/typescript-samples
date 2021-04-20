// Type inference from values (or RHS to LHS)
// hover and you would see type inferred

// declaring variables
let amount = 99.00
let isDebit = true

// function default parameters
function multiply(a: number, b = 10) {
    return a * b
}

// function return types
let addAmounts = function (...amounts: number[]) {
    // return amounts.reduce((sum, amount) => sum + amount)
}

// Best Common Type
type Person = { age: number }
type Teacher = Person & { classes: string[] }
type Student = Person & { grade: number }

function getMembersOfSchool() { // add ": Person[]" to explicitly type under super type
    let s1: Student = {age: 12, grade: 6}
    let s2: Student = {age: 14, grade: 7}
    let t1: Teacher = {age: 12, classes: ["A", "B"]}
    let t2: Teacher = {age: 12, classes: ["C", "D"]}

    return [s1, t1]
    // return [s1, s2]
    // return [t1, t2]
}

// Contextual Typing
type ATransaction = { amount: number, isDebit: boolean }
type TotalExpenses = (...transactions: ATransaction[]) => number

// identifying types of function parameter and return types from type expected on the left
const totalExpenses: TotalExpenses = (...ts) => {
    const debitTransactions = ts.filter(_ => _.isDebit);
    return debitTransactions.reduce((sum, t) => sum + t.amount, 0)
}
const t1: ATransaction = {amount: 10, isDebit: true}
const t2: ATransaction = {amount: 20, isDebit: true}
console.log(totalExpenses(t1, t2))