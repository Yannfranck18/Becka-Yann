function forclear() {
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
    removeZero();
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero();
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

function del() {
    var value = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = value.slice(0, -1);
    if (document.getElementById("output").innerHTML === "") {
        document.getElementById("output").innerHTML = "0";
    }
}