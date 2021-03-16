function reservationExample() {
    type Reservation = unknown

    type Reserve = {
        (from: Date, to: Date, destination: string): Reservation
        (from: Date, destination: string): Reservation
    }

    // This example does not work.
    /*let r1: Reserve = (from, to, destination) => {

    }*/

    // you need to explicitly provide types here.
    let r2: Reserve = (
        from: Date,
        toOrDestination: Date | string,
        destination ?: string) => {
        if (toOrDestination instanceof Date && destination !== undefined) {
            console.log("booking round-trip")
        } else if (typeof toOrDestination === 'string') {
            console.log('booking one-way trip')
        }
    }

    r2(new Date(), "Bali")
    r2(new Date(), new Date(), "San Francisco")
}

function htmlCreateElementExample() {
    // another example is createElement in DOM API at https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L4695-L4698
    type HTMLAnchorElement = unknown
    type CreateElement = {
        (tag: 'a'): HTMLAnchorElement
        (tag: 'canvas'): HTMLAnchorElement
        (tag: 'table'): HTMLAnchorElement
        (tag: string): HTMLAnchorElement
    }

/*
    let createElement: CreateElement = (tag) => {
        ///
    }
*/
}

function warnUserExample() {
    type WarnUser = {
        (warning: string): void;
        wasCalled: boolean;
    }
    // let warnUser: WarnUser = warning => {
    //     if(warnUser.wasCalled) return
    //     warnUser.wasCalled = true
    //     console.log(warning)
    // }
    // warnUser.wasCalled = false
}

reservationExample()

/**
 * Function overloading does not happen in JavaScript
 function a(x) { console.log(x) }
 function a(x, y) { console.log(x, y) }

 a(10, 20)
 10 20

 a(10)
 10 undefined
 */

// -- Now from: https://www.typescriptlang.org/docs/handbook/functions.html
function buildName(first: string, last: string = "Smith"): void {
    console.log(first + " " + last)
}
buildName("Bob")
buildName("Bob", undefined)
