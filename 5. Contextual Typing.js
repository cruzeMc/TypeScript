//TypeScript infers 'number' as the return type of 
// the function 'mul' by flowing type information 
// bottom up in the return expression
function mul(a, b) {
    return a * b;
}
console.log(typeof (mul(2, 2)));
//# sourceMappingURL=5. Contextual Typing.js.map