// The solutions are posted at https://github.com/bcherny/programming-typescript-answers/blob/master/src/ch04/exercises.ts
// 1. The return type
// 2. No, it's not. Use rest parameters
// 3.
function reservationExercise() {
    type Reservation = unknown
    type Reserve = {
        (from: Date, to: Date, destination: string): Reservation
        (from: Date, destination: string): Reservation
        (destination: string): Reservation
    }

    let r3: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
        if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
            console.log("Booking 2-way reservation")
        } else if (fromOrDestination instanceof Date && typeof toOrDestination === "string") {
            console.log("Booking one way reservation")
        } else {
            console.log("Booking instant reservation")
        }
    }

    r3("Tahiti")
    r3(new Date(), "Tahiti")
    r3(new Date(), new Date(), "Tahiti")
}

reservationExercise()

// 4. Update call implementation
function UpdateCall() {
    type SecondArgString = [unknown, string, ...unknown[]]

    function call<T extends SecondArgString, R>(
        f: (...args: T) => R,
        ...args: T
    ): R {
        return f(...args)
    }

    function fill(length: number, value: string): string[] {
        return Array.from({length}, () => value)
    }

    console.log(call(fill, 10, 'a'))
}

UpdateCall()

// 5. Typesafe assertion library
function typeSafeLib() {
    type Is = {
        (s1: string, s2: string): boolean;
        (b1: boolean, b2: boolean): boolean;
        (n1: number, n2: number): boolean;
        // I could not make it work as expected
        // (a1: [number], ...n2: number[number[]]): boolean;

    }

    let is: Is = (first: string | boolean | number | [number],
                  second: string | boolean | number | [number[]]
    ): boolean => {
        if (typeof first === 'string' && typeof second === 'string') return first === second;
        if (typeof first === 'boolean' && typeof second === 'boolean') return first && second;
        if (typeof first === 'number' && typeof second === 'number') return first === second;
        if (Array.isArray(first) && Array.isArray(second)) return false;
        return false;
    }

    // Compare a string and a string
    let r1 = is('string', 'otherstring') // false

    // Compare a boolean and a boolean
    let r2 = is(true, false) // false


    // Compare a number and a number
    let r3 = is(42, 42) // true


    // Comparing two different types should give a compile-time error
    // is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
                  // to parameter of type 'number'.

    // [Hard] I should be able to pass any number of arguments
    // let r4 = is([1], [1, 2], [1, 2, 3]) // false

    console.log(r1, r2, r3)
}
typeSafeLib()

function typeSafeLibFromBook() {
    function is<T>(a: T, ...b:[T, ...T[]]): boolean {
        return b.every(_ => _ === a)
    }
    // Compare a string and a string
    let r1 = is('string', 'otherstring') // false

    // Compare a boolean and a boolean
    let r2 = is(true, false) // false


    // Compare a number and a number
    let r3 = is(42, 42) // true


    // Comparing two different types should give a compile-time error
    // is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
    // to parameter of type 'number'.

    // [Hard] I should be able to pass any number of arguments
    let r4 = is([1], [1, 2], [1, 2, 3]) // false

    console.log(r1, r2, r3, r4)
}
typeSafeLibFromBook()