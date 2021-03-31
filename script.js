function compute()
{
  // numeric string regex
  // matches a string that only contains numeric characters
  // match fails for:
  // empty strings
  // strings with non-numeric characters
  // negative numbers
  var regex = /^\d+$/;

  // collect page elements for easy reference
  var p_el = document.getElementById("principal");
  var r_el, y_el, report_el;

  // collect user data for validation
  var principal = p_el.value;
  var rate, years;

  // declare other vars
  var total_interest, today, this_year, final_year, report_output;

  // verify principal is a number greater than 0
  // if not, create an Alert
  // delete existing input value
  // set focus to relevant input field
  if(!regex.test(principal) || parseInt(principal) < 1){
    alert("Enter a positive number");
    p_el.value = "";
    p_el.focus();
  }
  else {
    r_el = document.getElementById("rate");
    y_el = document.getElementById("years");

    // store output elements
    report_el = document.getElementById("report");

    // parse input to ints and floats for calculations
    principal = parseInt(p_el.value);
    rate      = parseFloat(r_el.value);
    years     = parseInt(y_el.value);

    // Calculate interest
    total_interest = principal * years * rate / 100;

    // Calculate No. Years end date
    today      = new Date();
    this_year  = parseInt(today.getFullYear());
    final_year = this_year + years;

    // Format output string
    report_output = "If you deposit <mark>" + principal + "</mark><br>";
    report_output += "at an interest rate of <mark>" + rate + "%</mark><br>";
    report_output += "You will receive an amount of <mark>" + total_interest + "</mark>,<br>";
    report_output += "in the year <mark>" + final_year +"</mark>";

    report_el.innerHTML = report_output;
  }
}

function display_rate(){
  var rate = document.getElementById("rate").value;
  var rate_el = document.getElementById("rate-info");

  rate_el.innerHTML = rate + " %";
}

