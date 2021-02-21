


function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var d = new Date();
    var year = d.getFullYear();
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var futureYear = parseInt(year) + parseInt(years);

    document.getElementById('result').innerHTML = 
        "<p>If you deposit <span class='hilite'>" + principal + "</span><br/>"
        + "at an interest rate of <span class='hilite'>" + rate + "% </span><br/>"
        + "You will receive an amount of <span class='hilite'>" + interest + "</span><br/>"
        + "in the year <span class='hilite'>" + futureYear + "</span></p>"; 


}

function alerterror(){
    var principal = document.getElementById("principal").value;
 
    if (principal < 1 ){
       alert("Enter in a positive number!");
        document.getElementById("principal").focus(); 

    }
    return

}
