function vote(candidate:string, callback:(result:string)=>any){
    return candidate;
}

vote("BigPig", function(result:string) {
    if(result === "BigPig"){
        return true;
    }
})