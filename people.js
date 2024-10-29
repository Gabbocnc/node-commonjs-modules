/* 3 - people.js*
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. */

/* Importa la tua funzione da names.js */
const getFullName = require('./names');
/* Importa la tua funzione da hobbies.js */
const myHobbies = require('./hobbies');
/* Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. */
/* All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */
function users(firstName,lastName,hobbies){
    return{
        firstName: firstName,
        lastName : lastName,
        hobbies : hobbies 
    }
}
console.log(users('Gabriele','Cianci',['VideoGames','Music','Swimming']));
console.log(users('Mario','Rossi',['Reading','Classic Music','Football']));


/* function marioRossi(){
    const user = getFullName('Mario','Rossi');
    const hobbies = myHobbies('Reading','Classic Music','Football')
    return{
        firstName: user.firstName,
        lastName : user.lastName,
        hobbies : hobbies.hobbies
    }
}
console.log(marioRossi()); */

