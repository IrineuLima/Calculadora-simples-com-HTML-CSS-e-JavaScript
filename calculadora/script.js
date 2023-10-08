let displayValue = "";

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

document.addEventListener("keydown", function(event) {
if (event.key.match(/[0-9+\-*/.=]|Enter/)) {
    appendToDisplay(event.key);
    if (event.key === "Enter") {
        calculateResult();
    }
} else if (event.key === "Escape") {
    clearDisplay();
}
});

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}