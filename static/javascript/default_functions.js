function navToggle() {
    const x = document.getElementById("navbar");
    if (x.innerHTML === "Closed") {
        x.innerHTML = "Open";
    } else {
        x.innerHTML = "Closed";
    }
}