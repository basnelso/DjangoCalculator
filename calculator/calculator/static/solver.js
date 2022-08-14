var equation = []
const numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
// Function that display value
function numberPushed(val) {
	display(val)
    if (numbers.has(equation[equation.length - 1])) {
    	equation = []
    }
    addToEquation(val);
}

function operatorPushed(val) {
	clearDisplay()
    addToEquation(val)
}

function clearPushed() {
    equation = []
    clearDisplay();
}

function display(val) {
    document.getElementById("displayWindow").value = val
}

function clearDisplay() {
	document.getElementById("displayWindow").value = ""
}

function addToEquation(val) {
    equation.push(val)
    console.log(equation)
}

var cal = document.getElementById("calcu");

// Function that evaluates the digit and return result
function solve() {
	// Send request to django to solve array
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}