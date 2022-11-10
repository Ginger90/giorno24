var name;
var usurname;
var email;
var elenco = [];
function init(){
    name = document.getElementById('name');
    usurname = document.getElementById('usurname');
    email = document.getElementById('email');
    elencoHTML = document.getElementById('elenco');
    printData();
}
function printData(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
        return response.json();
    })
    .then((data) =>{
    elenco = data;
    if(elenco.length > 0){
    elencoHTML.innerHTML += `<tr><td> ${name} </td></tr> <tr><td> ${surname} </td></tr> <tr><td> ${email} </td></tr>`
    }
    });
}