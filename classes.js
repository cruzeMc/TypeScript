var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BankAccount = (function () {
    function BankAccount() {
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount;
}());
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
var BankAccount2 = (function () {
    function BankAccount2(balance) {
        this.balance = balance;
    }
    BankAccount2.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount2;
}());
var CheckingAccount = (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(balance) {
        _super.call(this, balance);
    }
    CheckingAccount.prototype.writeCheck = function (debit) {
        this.balance -= debit;
    };
    return CheckingAccount;
}(BankAccount2));
//# sourceMappingURL=classes.js.map