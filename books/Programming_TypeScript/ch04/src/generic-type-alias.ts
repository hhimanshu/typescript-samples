type MyEvent<T> = {
    target: T
    type: string
}
type ButtonEvent = MyEvent<HTMLButtonElement | null>

let myEvent: MyEvent<HTMLElement | null> = {
    target: document.querySelector("#button"),
    type: 'click'
}

type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}

function triggerEvent<T>(event: MyEvent<T>): void {
    // ....
}

let btnEvent: ButtonEvent = {
    target: document.querySelector(".btn"),
    type: 'onclick'
}
triggerEvent(btnEvent)
triggerEvent({
    target: document.getRootNode(),
    type: 'onclick'
})

type MyOtherEvent<T = HTMLElement> = {
    target: T
    type: string
}

type MyOtherEvent2<T extends HTMLElement = HTMLElement> = {
    target: T
    type: string
}