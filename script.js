function darkmode(el) {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if(el.value === "Dark Mode"){
        el.value = "Light Mode";
    }
    else
    {
        el.value = "Dark Mode";
    }
}

var birthDate = 11;
var birthMon = 10;
var birthYear = 2000;

var date = new Date();
var thisDate = date.getDate();
var thisMon = date.getMonth() + 1;
var thisYear = date.getFullYear();

var difYear = thisYear - birthYear;
var difMon = thisMon - birthMon;
var difDate = thisDate - birthDate;

if(difDate < 0){
    difDate += 30;
    difMon--;
}

if(difMon < 0){
    difMon += 12;
    difYear--;
}

var age = document.getElementById('age');
age.innerHTML = difYear + " Years " + difMon + " Months " + difDate + " Days.";

function copy() {
    var input = document.createElement("input");
    var inputc = document.body.appendChild(input);
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("Link Copied");
}