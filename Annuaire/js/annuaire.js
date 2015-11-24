$list = document.getElementById("list");
$firstname = document.getElementById("firstname");
$lastname = document.getElementById("lastname");
$phonenumber = document.getElementById("phonenumber");
$add = document.getElementById("add");
$research = document.getElementById("research");
$search = document.getElementById("search");
$result = document.getElementById("result");

contacts = [{
    firstname: "Julien",
    lastname: "Grillot",
    phonenumber: "0123456789"
}, {
    firstname: "John",
    lastname: "Smith",
    phonenumber: "0123456789"
}];

function texteContact(contact) {
    return contact.firstname + " " + contact.lastname + " (" + contact.phonenumber + ")";
}

function showList() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $list.innerHTML = elements;
}

function add() {
    contacts.push({
        firstname: $firstname.value,
        lastname: $lastname.value,
        phonenumber: $phonenumber.value
    });
    showList();
}

function search() {
    research = $research.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname == research || contacts[i].lastname == research || contacts[i].phonenumber == research) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $result.innerHTML = elements;
}

$add.onclick = add;
$search.onclick = search;
showList();