// let nameUser = prompt("Inserisci il tuo nome: ");
// console.log(nameUser);

// let surname = prompt("Inserisci il tuo cognome: ");
// console.log(surname);

// const favouriteColor = prompt("Inserisci il tuo colore: ");
// console.log(favouriteColor);

// document.getElementById("my_message").innerHTML = "Password generata: " + nameUser + surname + favouriteColor + "22";

let nameUser = prompt("Inserisci il tuo nome: ");
document.getElementById("name_user").innerHTML = nameUser;

let surname = prompt("Inserisci il tuo conome: ");
document.getElementById("surname").innerHTML = surname;

let favouriteColor = prompt("Inserisci il tuo colore preferito: ");
document.getElementById("favourite_color").innerHTML = favouriteColor;

document.getElementById("generator").innerHTML = nameUser + surname + favouriteColor + 22;