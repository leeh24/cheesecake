//Henry Lee

$(document).ready(function() {
    // event handler for button 
    $("#orderButton").click(function() {
        var noteTxt = $("#text").val();
        if (noteTxt.includes("vegan")) {
            alert("Cheesecakes contain dairy");
        }

        // get value of topping and quantity
        var topping = $('input[name="topping"]:checked').val();
        var quantity = $("#quantityOption").val();

        // printing order details
        var orderDetails = "Thank you! Your order has been placed: " + " " + "Quantity: " + quantity + " " + "Topping: " + topping;

        $.post("/neworder", { quantity: quantity, topping: topping, notes: noteTxt}, function (result) {
            var data = result.message;

            if (data!= "okay") {
                orderDetails = "Fail to place order";
            }

             // replace form with order details
            $("#orderform").replaceWith("<div>" + orderDetails + "</div>");

        });
    });

dropdownHoverInHandler = function () { // handler for dropdown button hover in function
    $(this).attr('size', 4);
}

dropdownHoverOutHandler = function() { // handler for dropdown button hover out function
    $(this).attr('size', 1);
}

dropdownClickHandler = function() { // handler for dropdown button click handler
        var month = $('#dropdown option:selected').text();

        // construct url
        var url = "/orders/" + month;

        // post remote url to get orders by month
        $.post(url, function (result){
            // extract data from result and construct message to display
            var data = result.data;
            var msg = month + " orders: ";
            for (var i=0; i < data.length; i++) {
                msg = msg + data[i].QUANTITY + " " + data[i].TOPPING + "; ";
            }

            //show order details for month
            $("#orders").html(msg);

            //hide static order detail
            $("ul").hide();
        });
}

    //add dropdown feature to menu
    $('#dropdown').hover(dropdownHoverInHandler, dropdownHoverOutHandler);

    // get selection value
    $('#dropdown').click(dropdownClickHandler);



});