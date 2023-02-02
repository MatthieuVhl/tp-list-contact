import {Contact} from "./classes/contact.js"

const tableauContact = document.getElementById("tableContact") as HTMLElement
const ajoutContact = document.getElementById("ajoutContactForm") as HTMLElement
let contact1 : Contact = new Contact("Clement","Lalaux",24,"Clement.Lalaux@gmail.com","0665656566")
let contact2 : Contact = new Contact("Théo","Courbot",22,"Théo.Courbot@gmail.com","0665656566")
let contact3 : Contact = new Contact("Clement","Lalaux",24,"Clement.Lalaux@gmail.com","0665656566")
let contact4 : Contact = new Contact("Clement","Lalaux",24,"Clement.Lalaux@gmail.com","0665656566")
let contact5 : Contact = new Contact("Keke","keke",31,"kekedu31.Lalaux@gmail.com","0665656566")
let nom = document.getElementById("nom") as HTMLInputElement
let prenom = document.getElementById("prenom") as HTMLInputElement
let age = document.getElementById("age") as HTMLInputElement
let email = document.getElementById("email") as HTMLInputElement
let telephone = document.getElementById("telephone") as HTMLInputElement

const tableau : Contact[] = []

tableau.push(contact1, contact2, contact3,contact4,contact5)

function afficher(){
    let html : string = '';
    tableau.forEach( personne => {
//  console.log(personne.mail)
        html +=  `<p>${personne.firstname} </p>`
    })
    tableauContact.innerHTML = html ;
}
afficher();

ajoutContact.addEventListener("submit",(e) =>  {
e.preventDefault();
let newPersonne: Contact = new Contact(nom.value,prenom.value,Number(age.value),email.value,telephone.value);
console.log("hello");
tableau.push(newPersonne)

afficher()
})
