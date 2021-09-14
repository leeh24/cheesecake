//Henry Lee

$(document).ready(function() {
    // event handler for button 
    $("#button").click(function() {
        var noteTxt = $("#text").val();
        if (noteTxt.includes("vegan")) {
            alert("Cheesecakes contain dairy");
        } else {
            // get value of topping and quantity
            var topping = $('input[name="topping"]:checked').val();
            var quantity = $("#quantityOption").val();

            // printing order details
            var orderDetails = "Thank you! Your order has been placed: " + " " + "Quantity: " + quantity + " " + "Topping: " + topping;

            // replace form with order details
            $("#orderform").replaceWith("<div>" + orderDetails + "</div>");

        }

    });

dropdownHoverInHandler = function () { // handler for dropdown button hover in function
    $(this).attr('size', 4);
}

dropdownHoverOutHandler = function() { // handler for dropdown button hover out function
    $(this).attr('size', 1);
}

dropdownClickHandler = function() { // handler for dropdown button click handler
        var month = $('#dropdown option:selected').text();
}

    //add dropdown feature to menu
    $('#dropdown').hover(dropdownHoverInHandler, dropdownHoverOutHandler);

    // get selection value
    $('#dropdown').click(dropdownClickHandler);



});