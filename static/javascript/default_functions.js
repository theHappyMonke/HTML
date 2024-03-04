function navToggle() {
    const x = document.getElementById("index");
    if (x.innerHTML === "Closed") {
        x.innerHTML = "Open";
    } else {
        x.innerHTML = "Closed";
    }
}