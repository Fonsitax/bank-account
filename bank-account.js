class BankAccount {
    constructor(accountHolder, initialDeposit) {
        this._accountHolder = accountHolder;
        this._balance = initialDeposit;
    }

    get balance() {
    return this._balance;   
    }

    get accountHolder() {
        return this._accountHolder;
    }

    deposit(amount) {
        this._balance += amount;
    }

    //instance method
    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    static transfer(fromAccount, toAccount, amount) {
        if (amount <= fromAccount._balance) {
            fromAccount.withdraw(amount);
            toAccount.deposit(amount);
             const transferDate  = new Date();
            console.log(`Transferred $${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder} on ${transferDate}`);
        } else {
            console.log("Transfer failed: you have insufficient funds in your account");
        }
    }
}

// test my class
const account1 = new BankAccount("Fonni", 1000);
const account2 = new BankAccount("Micha", 500); 

account1.deposit(200);
account2.withdraw(150);
console.log(`Fonni's balance: $${account1.balance}`); 

BankAccount.transfer(account1, account2, 300);
console.log(`Fonni's balance: $${account1.balance}`);
console.log(`Micha's balance: $${account2.balance}`);