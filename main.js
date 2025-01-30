var buttons = document.querySelectorAll("button");
buttons.forEach(element => element.addEventListener("click", toggle));

function toggle() {
    if (this.className == "") {
        buttons.forEach(element => element.className = "");
        this.className = "selected";
    }
}