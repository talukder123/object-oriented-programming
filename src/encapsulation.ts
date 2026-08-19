class BankAccount {
    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());