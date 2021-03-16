function map<T, U>(array: T[], f: (item: T) => U): U[] {
    let result: U[] = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}
console.log(map([1, 2, 3], _ => _ * 2))
console.log(map(["1", "2", "3"], s => s + s))

const a: Array<number> = []