/// Rest parameters
function sum(numbers: number[]): number {
    return numbers.reduce((p, c) => p + c)
}

console.log(sum([1, 2, 3]))

function sumVariadic(...numbers: number[]): number {
    return numbers.reduce((p, c) => p + c)
}

console.log(sumVariadic(1, 2))
console.log(sumVariadic(1, 2, 3, 4, 5))


// function print(this: Date): void {
//     console.log(this.toUTCString())
// }
// print.call(new Date())
// print() // TS will complain

function* fibo() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a, b] = [b, a + b]
    }
}
let fibonacci = fibo()
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())

// Creating an iterable
let numbers = {
    *[Symbol.iterator]() {
        let number = 1
        let limit = 1_00
        while(number <= limit) {
            yield number;
            number = number + 1
        }
    }
}

for (let n of numbers) {
    console.log(n)
}

type Log = (message: string, userId?: string) => void
let log: Log = (message, userId = 'not signed in') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
log("transaction added", "tony")
log("transaction modified", "jimmy")
log("user deleted")

function times(f: (index: number) => void, n: number) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}
times(i => console.log(i), 10)