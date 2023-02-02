import { Contact } from "./classes/contact.js";
const tableauContact = document.getElementById("tableContact");
const ajoutContact = document.getElementById("ajoutContactForm");
let contact1 = new Contact("Clement", "Lalaux", 24, "Clement.Lalaux@gmail.com", "0665656566");
let contact2 = new Contact("Théo", "Courbot", 22, "Théo.Courbot@gmail.com", "0665656566");
let contact3 = new Contact("Clement", "Lalaux", 24, "Clement.Lalaux@gmail.com", "0665656566");
let contact4 = new Contact("Clement", "Lalaux", 24, "Clement.Lalaux@gmail.com", "0665656566");
let contact5 = new Contact("Keke", "keke", 31, "kekedu31.Lalaux@gmail.com", "0665656566");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let age = document.getElementById("age");
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
const tableau = [];
tableau.push(contact1, contact2, contact3, contact4, contact5);
function afficher() {
    let html = '';
    tableau.forEach(personne => {
        //  console.log(personne.mail)
        html += `<p>${personne.firstname} </p>`;
    });
    tableauContact.innerHTML = html;
}
afficher();
ajoutContact.addEventListener("submit", (e) => {
    e.preventDefault();
    let newPersonne = new Contact(nom.value, prenom.value, Number(age.value), email.value, telephone.value);
    console.log("hello");
    tableau.push(newPersonne);
    afficher();
});
