enum TransactionType {
    DEBIT = 0,
    CREDIT = 1
}

let debit = TransactionType.DEBIT
let credit = TransactionType.CREDIT

const enum WeekDays {
    MONDAY = '2',
    TUESDAY = '3',
    WEDNESDAY = '4',
    THURSDAY = '5',
    FRIDAY = '6'
}
const enum WeekDays {
    SUNDAY = '1',
    SATURDAY = '7'
}

let funDay = WeekDays.FRIDAY
console.log("funday=", funDay)

function getFunDay(day: WeekDays) {
    console.log("Your fun day is ", day)
}
getFunDay(WeekDays.FRIDAY)
//getFunDay(1)