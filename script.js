function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    var principal = p;
    var rate = r;
    var years = y;

    var interest = principal * years * rate / 100;

    var today = new Date();
    var this_year = today.getFullYear();
    var final_year = parseInt(this_year) + parseInt(years);

    alert(final_year);
}
        