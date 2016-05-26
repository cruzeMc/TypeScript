class BankAccount{
    balance = 0;
    deposit(credit:number){
        this.balance += credit;
        return this.balance;
    }
}

// var BankAccount = (function() {
//     function BankAccount(){
//         this.balance;
//     }
//
//     BankAccount.prototype.deposit = function(credit){
//         this.balance += credit;
//         return this.balance;
//     }
//
//     return BankAccount;
// })();

class BankAccount2{
    constructor(public balance:number){

    }

    deposit(credit:number){
        this.balance += credit;
        return this.balance;
    }
}

class CheckingAccount extends BankAccount2{
    constructor(balance:number){
        super(balance);
    }

    writeCheck(debit:number){
        this.balance -= debit;
    }
}