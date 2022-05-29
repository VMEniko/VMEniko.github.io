console.log("Hello, this is a chilling console message")

//változók hozzáadása

let chin1Age = 2
let chin2Age = 5
let total = chin1Age+chin2Age
// deklaráció és definíció (=értékadó operátor)

let name
// deklaráció

// állandó változó
const UserAge = 23

typeof chin1Age
"number"

//keresés, csere
let testString = "Hol lehet a baba"
testString.indexOf("baba")
12 (0tól kezd, -1 nincs ilyen)
testString.replace("baba" , "pénz")
"Hol lehet a pénz"
let test2 = testString.replace("baba" , "mama")

// trim()
Eltávolítja a felesleges szóközöket, amelyek a String előtt és után találhatóak.
// ()concat()
Új karaktereket fűz hozzá a meglévő Stringhez.
// toLowerCase()
Kisbetűssé alakítja az adott Stringet.
//toUpperCase()
Nagybetússé alakítja a Stringet

// BooleanLogikai kifejezésekben a következő operátorokat használhatod:
< kisebb,
> nagyobb,
<= kisebb vagy egyenlő,
>= nagyobb vagy egyenlő,
== megegyező érték,
=== megegyező érték és típus,
!= nem megegyező érték,
!== nem megegyező érték és típus,
! tagadás - logikai érték megfordítása,
&& és,
|| vagy

function myFunction(parameter1,parameter2,parameterX) { a futtatható kód }
myFunction ()

// eljárás - nincs output (pl hider)
// függvény  - visszaad valamilyen adatot (
    function adder(x , y){
        return x+y;
    }