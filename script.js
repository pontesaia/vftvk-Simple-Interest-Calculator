
var p = document.getElementById("principal").value;
var r = document.getElementById("rate").value;
var d = new Date();
var year = d.getFullYear();
var y = document.getElementById("year").value;
var c;
var amount = p * r;
var c = year + y;

function compute() {
    var results =
        "If you deposit" + p + "<br/>"
        + "at an interest rate of" + r + "<br/>"
        + "You will recieve an amount of " + amount + "<br/>"
        + "in the year" + c + "<br/>";
    console.log(results);
    return results;

}

document.getElementById('result').innerHTML = results;  