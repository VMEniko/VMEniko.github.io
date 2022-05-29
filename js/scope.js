// Global scope. - var esetén funkció scope
var globalName = "Szergej";

function smthing(){
    var globalName = "Igor";
    console.log(globalName);
}

smthing();

console.log(globalName)

// Global scope. - let esetén blokk {} scope
let name = "Szofi";
// let name="Klotild"; nem lehet egy blokkon belül
{
    let name = "Minci";
    console.log(name);
}

console.log(name)

// Global scope. - const esetén nagybetűs név, blokk {} scope
const NAME = "Klotild";
//NAME = "EGÉR" nem lehet újradefiniálni

{
    const NAME = "Barb";
    //NAME = "Egér" nem lehet újradefiniálni
    console.log(NAME);
}

console.log(NAME)