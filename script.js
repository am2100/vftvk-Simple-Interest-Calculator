function compute()
{
    // collect page elements for easy reference
    p_el = document.getElementById("principal");
    r_el = document.getElementById("rate");
    y_el = document.getElementById("years");

    result_el = document.getElementById("result");

    // parse input to integers to make calculations easier to read
    var principal = parseInt(p_el.value);
    var rate      = parseInt(r_el.value);
    var years     = parseInt(y_el.value);

    // verify principal is greater than 0
    // if not, create an Alert
    // delete existing input value
    // set focus to relevant input field
    if(principal < 1){
        alert("Enter a positive number");
        p_el.value = "";
        p_el.focus();
    }
    else {
        // Do the necessary calculations
        var total_return = principal * years * rate / 100;

        var today      = new Date();
        var this_year  = parseInt(today.getFullYear());
        var final_year = this_year + years;

        // Format output string
        var result_output = "If you deposit <mark>" + principal + "</mark><br>";
        result_output += "at an interest rate of <mark>" + rate + "%</mark><br>";
        result_output += "You will receive an amount of <mark>" + total_return + "</mark>,<br>";
        result_output += "in the year <mark>" + final_year +"</mark>";

        result_el.innerHTML = result_output;
    }
}

function display_rate(){
    var rate = document.getElementById("rate").value;
    var rate_el = document.getElementById("rate-info");

    rate_el.innerHTML = rate + " %";
}

