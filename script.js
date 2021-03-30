function compute()
{
    p_el = document.getElementById("principal");
    r_el = document.getElementById("rate");
    y_el = document.getElementById("years");

    result_el = document.getElementById("result");

    var principal = p_el.value;
    var rate      = r_el.value;
    var years     = y_el.value;

    var interest = principal * years * rate / 100;

    var total_return = parseInt(principal) + parseInt(interest);

    var today      = new Date();
    var this_year  = today.getFullYear();
    var final_year = parseInt(this_year) + parseInt(years);

    var result_output = "If you deposit <mark>" + principal + "</mark><br>";
    result_output += "at an interest rate of <mark>" + rate + "%</mark><br>";
    result_output += "You will receive an amount of <mark>" + total_return + "</mark>,<br>";
    result_output += "in the year <mark>" + final_year +"</mark>";

    result_el.innerHTML = result_output;

    //alert(result_output);
}

function display_rate(){
    var rate = document.getElementById("rate").value;
    var rate_el = document.getElementById("rate-info");

    rate_el.innerHTML = rate + " %";
}