


function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var d = new Date();
    var year = d.getFullYear();
    var y = document.getElementById("years").value;
    var c;
    var amount = (p * r/100) * y;
    var c = parseInt(year) + parseInt(y);

    document.getElementById('result').innerHTML = 
        "If you deposit " + p + "<br/>"
        + "at an interest rate of " + r + "% <br/>"
        + "You will recieve an amount of " + amount + "<br/>"
        + "in the year " + c + "<br/>"; 


}

