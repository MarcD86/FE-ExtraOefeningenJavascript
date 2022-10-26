// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl', 'henk@mail.com'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.

emailadresses.push("m.westerbroek@novi.nl")

function printEmail() {
    for (let i = 0; i < emailadresses.length; i++) {
        console.log(emailadresses[i])
    }
}

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.

function addEmail(email) {
            if(emailadresses.includes(email)!==true) {
                return emailadresses.push(email)
            }
         }

addEmail("henk@mail.com")
addEmail("joop@mail.com")
addEmail("sjaak@mail.com")
addEmail("joop@mail.com")
printEmail()

/* Opdracht 2 */
// 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl

function checkEmail(email) {

    if (emailadresses.includes(email) === true) {
        console.log(email + " exist in mailbox" )
    }
    else {
        console.log(email + " not exist in mailbox")
    }
}
checkEmail("n.stuivenberg@novi.nl")
checkEmail("henk@l.nl")

// 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.

function emailInput(email, lastName) {

    if(email.toLowerCase().includes(lastName.toLowerCase())) {
        return email
    }
    else {
        return null
    }
}

console.log(emailInput("AAA@AAA.com", 'aaa'))
console.log(emailInput("AAA@AAA.com", 'bbb'))

/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zijn komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!

//const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl', 'henk@mail.com'];

function addMailToPosition(position, deleteCount, addItem) {

    emailadresses.splice(position, deleteCount, addItem)
}

addMailToPosition(-1, 0, "Z.mellink@novi.nl")
console.log(emailadresses)

// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.

function addMails(email){

    //zoek het mail adres dat begint met Z en geef array nummber terug
    const a = emailadresses.includes("Z")

    emailadresses.splice(a -2, 0, email)
   }

addMails("Zap@aap.com")

console.log(emailadresses)


/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

// function addMailToPosition(position, deleteCount, addItem) {
//
//     emailadresses.splice(position, deleteCount, addItem)
// }
//
// addMailToPosition(-1, 0, "Z.mellink@novi.nl")
// console.log(emailadresses)