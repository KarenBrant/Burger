// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
     $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");
        var newDevour = $(this).data("newdevour");

        // Pick up the new value for Devour
        var newEatState = {
        devoured: newDevour
    }

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newEatState
    }).then(
    function() {
        // Reload the page to get the updated list
        location.reload();
    }
    );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Get values for the new burger.  Devoured should always false for a new burger.
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

        // Reload the page to get the updated list
        location.reload();
        }
        );
    });
}); 
