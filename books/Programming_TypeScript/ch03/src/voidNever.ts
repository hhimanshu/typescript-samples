function returnsNumberOrNull(a: number): number | null {
    if (a < 20) return a;
    return null
}

function returnsUndefined(): undefined {
    return undefined
}

function returnsVoid(): void {
    let a = 5 + 10
}

function returnsNever(): never {
    throw TypeError("bang!")
}

function finishesNever(): never {
    while(true) {
        console.log("infinite")
    }
}