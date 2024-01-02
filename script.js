function darkmode(el) {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if(el.value === "Switch to Dark Mode"){
        el.value = "Switch to Light Mode";
    }
    else
    {
        el.value = "Switch to Dark Mode";
    }
}

var birthDate = 31;
var birthMon = 8;
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