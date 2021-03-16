type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[];
    // (array: string[], f: (item: string) => boolean): string[];
    // (array: object[], f: (item: object) => boolean): object[];
}

let filter: Filter = (array, f) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}


let names = [
    {name: "beth"},
    {name: "bob"},
    {name: "amy"}
]

console.log(filter(names, _ => _.name.length > 3))
console.log(filter(names, _ => _.name.startsWith('a')))

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filter(nums, _ => _ % 2 == 0));
console.log(filter(nums, _ => _ % 2 == 1));

// ---
type Filter1 = {
    <T>(items: T[], f: (item: T) => Boolean): T[]
}
const filter1: Filter1 = (items, f) => items.filter(f)
console.log("filter1", filter1([1, 2, 3, 4, 5], _ => _ % 2 === 0))

type Filter2<T> = {
    (items: T[], f: (item: T) => Boolean): T[]
}
const filter2: Filter2<number> = (items, f) => items.filter(f)
console.log("filter2", filter2([1, 2, 3, 4, 5], _ => _ % 2 === 1))

type Filter3 = <T>(items: T[], f: (item: T) => Boolean) => T[]
const filter3: Filter3 = (items, f) => items.filter(f)
console.log("filter3", filter3([1, 2, 3, 4, 5], _ => _ > 2))

type Filter4<T> = (items: T[], f: (item: T) => Boolean) => T[]
const filter4: Filter4<string> = (items, f) => items.filter(f)
console.log("filter4", filter4(["amy", "aaron", "becky"], _ => _.startsWith("a")))

function filter5<T>(items: T[], f: (item: T) => Boolean): T[] {
    let result = []
    for (let i = 0; i < items.length; i++) {
        if (f(items[i])) {
            result.push(items[i])
        }
    }
    return result
}

console.log("filter5", filter5([1, 2, 3, 4, 5, 6], _ => _ <= 3))