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