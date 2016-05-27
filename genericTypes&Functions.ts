interface Array<T>{
    reverse(): T[];
    sort(compareFn?: (a:T, b:T) => number): T[];
}

map<U>(func: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

interface NamedItem{
    name:string;
}

class List<T extends NamedItem>{
    next: List<T>=null;
    
    constructor(public item: T){}
    
    insertAfter(item:T){
        var temp = this.next;
        this.next = new List(item);
        this.next.next = temp;
    }
    
    log(){
        console.log(this.item.name);
    }
}