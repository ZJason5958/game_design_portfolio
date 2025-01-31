var buttons = document.querySelectorAll("button");
buttons.forEach(element => element.addEventListener("click", toggle));

function toggle() {
    if (!this.classList.contains("selected")) {
        var chosenButton = this;
        var otherButton = chosenButton.parentElement.querySelector(".selected");
        chosenButton.classList.add("selected");
        otherButton.classList.remove("selected");
        var shownList = document.querySelector("ul:not(.hide)");
        var hiddenList = document.querySelector(".hide");
        shownList.classList.add("hide");
        hiddenList.classList.remove("hide");
    }
}