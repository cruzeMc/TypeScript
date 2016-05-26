//TypeScript infers 'number' as the return type of 
// the function 'mul' by flowing type information 
// bottom up in the return expression
function mul(a:number, b:number){
    return a * b;
}

console.log(typeof(mul(2,2)));