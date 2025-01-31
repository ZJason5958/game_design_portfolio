var buttons = document.querySelectorAll("button");
buttons.forEach(element => element.addEventListener("click", toggle));

function toggle() {
    if (!this.classList.contains("selected")) {
        buttons.forEach(element => element.className = "");
        this.className = "selected";
        var shown = document.querySelector("ul:not([hide])");
        var hidden = document.querySelector(".hide");
        shown.classList.add("hide");
        hidden.classList.remove("hide")
    }
}