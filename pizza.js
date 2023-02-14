var price;
var typeCrust;
var payType;
const arrayToppings = [];

function crustChoice(){
    var buttons = document.getElementsByName("crust-option");
    var payment = document.getElementsByName("payment");
    var crusts;
    var payments;

    if (!buttons[0].checked && !buttons[1].checked && !buttons[2].checked) {
        alert("Please select a crust type");
    }
    else if (buttons[0].checked) {
        crusts = "Thin";
    }
    else if (buttons[1].checked) {
        crusts = "Rising";
    }
    else if (buttons[2].checked) {
        crusts = "Deep";
    }


    if (payment[0].selectedIndex != 1 && payment[0].selectedIndex != 2 && payment[0].selectedIndex != 3) {
        alert("Please select a payment type");
    }
    else if (payment[0].selectedIndex == 1) {
        payments = "Cash";
        alert ("Please pay with cash upon pickup");
    }
    else if (payment[0].selectedIndex == 2) {
        payments = "Card";
        alert ("Thank you for your card payment");
    }
    else if (payment[0].selectedIndex == 3) {
        payments = "PayPal";
        alert ("Thank you for your paypal payment");
    }

    if (crusts != null && payments != null) {
        costCalc(crusts, payments);
    }
}

function costCalc(crustType, paymentType) {
    var total = 0.00;
    var formGet = document.getElementById("pizzaForm");
    if (crustType == "Thin") {
        total += 5.00;
    }
    
    else if (crustType == "Rising") {
        total += 8.00;
    }
    else if (crustType == "Deep") {
        total += 11.00;
    }
    var toppings = document.getElementsByName("topping")
    if (toppings[0].checked) {
        total += 0.50;
        localStorage.setItem("toppings0", toppings[0].value);
    }
    if (toppings[1].checked) {
        total += 0.50;
        localStorage.setItem("toppings1", toppings[1].value);

    }
    if (toppings[2].checked) {
        total += 0.50;
        localStorage.setItem("toppings2", toppings[2].value);
    }
    if (toppings[3].checked) {
        total += 0.50;
        localStorage.setItem("toppings3", toppings[3].value);
    }
    if (toppings[4].checked) {
        total += 0.50;
        localStorage.setItem("toppings4", toppings[4].value);
    }
    if (toppings[5].checked) {
        total += 0.50;
        localStorage.setItem("toppings5", toppings[5].value);

    }
    if (toppings[6].checked) {
        total += 0.50;
        localStorage.setItem("toppings6", toppings[6].value);
    }
    if (toppings[7].checked) {
        total += 0.50;
        localStorage.setItem("toppings7", toppings[7].value);
    }
    if (toppings[8].checked) {
        total += 0.50;
        localStorage.setItem("toppings8", toppings[8].value);
    }
    if (toppings[9].checked) {
        total += 0.50;
        localStorage.setItem("toppings9", toppings[9].value);
    }
    alert("Total cost of order: $" + total.toFixed(2));
    formGet.submit();
    //document.write("Your order is a " + crustType + "with toppings as " + toppings + "and your payment is " );
    localStorage.setItem("price", total);
    localStorage.setItem("crust", crustType);
    localStorage.setItem("pay", paymentType);
}

//Calculate cost of pizza through the sum of size and toppings