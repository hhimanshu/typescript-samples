interface Tr {
    where: string;
    amount: number;
    // log: (this: Tr) => void;
    log: () => void;
}
const transaction: Tr = {
    where: "Drip Coffee",
    amount: 12.23,
    log() {
        console.log(`You spent ${this.amount} at ${this.where}`)
    }
}

transaction.log()

const weather = {
    location: "San Francisco",
    current: "Sunny",
    log: transaction.log
}

weather.log()