type Age = number
type Person = {
    name: string
    age: Age
}

let p: Person = {
    name: "Jane",
    age: 22
}

// union types
type Transaction = { when: Date, amount: number }
type Debit = { debit: true }
type Credit = { debit: false }

// NOTE: a value with a union type (|) isn’t necessarily one specific member of your union; in fact, it can be both members at once
type DebitTransactionU = Transaction | Debit
type CreditTransactionU = Transaction | Credit

let dt1: DebitTransactionU = {debit: true}
console.log(dt1)

dt1 = {when: new Date(), amount: 99.25}
console.log(dt1)

dt1 = {when: new Date(), amount: 99.25, debit: true}
console.log(dt1)

let ct1: CreditTransactionU = {debit: false}
console.log(ct1)

ct1 = {when: new Date(), amount: 99.25}
console.log(ct1)

ct1 = {when: new Date(), amount: 99.25, debit: false}
console.log(ct1)


console.log(dt1)
console.log(ct1)

// intersection types
// NOTE: must contain all attributes from all types
type DebitTransactionI = Transaction & Debit
type CreditTransactionI = Transaction & Credit

// let dt2: DebitTransactionI = {debit: true} // missing Transaction attributes
// let dt2: DebitTransactionI = {when: new Date(), amount: 99.25} // missing Debit attributes
let dt2: DebitTransactionI = {when: new Date(), amount: 99.25, debit: true} // all OK

// let ct2: CreditTransactionI = {debit: false} // missing Transaction attributes
// let ct2: CreditTransactionI = {when: new Date(), amount: 99.25} // missing Credit attributes
let ct2: CreditTransactionI = {when: new Date(), amount: 99.25, debit: false} // all OK

console.log(dt2)
console.log(ct2)