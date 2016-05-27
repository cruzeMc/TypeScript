map(func, function (value, index, array) { return U; }, thisArg ?  : any);
U[];
var List = (function () {
    function List(item) {
        this.item = item;
        this.next = null;
    }
    List.prototype.insertAfter = function (item) {
        var temp = this.next;
        this.next = new List(item);
        this.next.next = temp;
    };
    List.prototype.log = function () {
        console.log(this.item.name);
    };
    return List;
}());
//# sourceMappingURL=genericTypes&Functions.js.map