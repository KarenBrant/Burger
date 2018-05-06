// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
    $("#devour").on("click", function(event) {
        console.log("in the devour function");
        var id = $(this).data("id");
        var newBurger=$(this).data("newburger");
        var newDevour = $(this).data("newdevour");

        var newEatState = {
        devoured: newDevour
        };
        console.log("devoured: " + devoured);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
        }).then(
        function() {
            console.log("changed to", newDevour);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");

            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    // $("#burger-name").val("");
    // $("#devoured").val("");
}); 
