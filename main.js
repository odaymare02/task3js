var forms = document.querySelector("form");
var coins=
{
    USD:3.5,
    JOD:5,
    NIS:1
};
forms.onsubmit= function(e) {
    e.preventDefault();
    var elemnts=e.target.elements;
    var valu=elemnts[0].value;
    var resul=document.querySelector("p");
    var calc=valu*coins[elemnts[1].value];
    resul.textContent=`The converted amount is ${calc} NIS `;
    var table=document.querySelector("table");
    table.innerHTML+=data;
}
