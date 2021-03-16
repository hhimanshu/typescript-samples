type IsForeignTransaction = { currency: string, conversionRate: number, feesPercent: number }
type IsDebitTransaction = { transactionType: 'debit' }
type IsCreditTransaction = { transactionType: 'credit' }

type Transaction = { amount: number } & (IsCreditTransaction | IsDebitTransaction)

function calculateForeignTransactionFees<T extends Transaction & IsForeignTransaction>(transaction: T): number {
    const totalFees = (transaction.amount * (transaction.feesPercent / 100)) * transaction.conversionRate;
    console.log(`Total Fees = ${totalFees}`);
    return totalFees;
}

let localCreditTransaction: Transaction = {amount: 100, transactionType: "credit"};
let foreignDebitTransaction: Transaction & IsForeignTransaction = {
    amount: 200,
    transactionType: "debit",
    currency: "NZD",
    conversionRate: 1.52,
    feesPercent: 2.23
}

// calculateForeignTransactionFees(localCreditTransaction) // won't work
calculateForeignTransactionFees(foreignDebitTransaction)