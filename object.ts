var MakePoint: () => {
    x: number;
    y: number;
};

interface Friend{
    name: string;
    favouriteColor?: string;
}

function add(friend: Friend){
    var name = friend.name;
}

add({name: "Fred"});
//add({favouriteColor: "blue"});//Error, name required
add({name: "Jill", favouriteColor: "green"});

interface JQuery{
    text(content:string);
}

interface JQueryStatic{
    get(url:string, callback: (data:string) => any);
    (query:string): JQuery;
}

declare var $: JQueryStatic;

$.get("http://mysite.org/divContent",
    function(data:string){
        $("div").text(data);
    }
);

var f: {():string};
vare sameType: () => string = f;
//var nope: () => number = sameType; //Error: type mismatch