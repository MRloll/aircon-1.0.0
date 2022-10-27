(function ($) {
    "use strict";

    $(".change_lang").on("click", () => {
        $(".upper-bar .dropdown-list .wrapper, nav .dropdown-list .wrapper").slideToggle(200)
    })
    
        // show details button
    $(".services .show-details").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".service-item").find(".details-overlay").show(500)
    });

    $(".services .service-item .details-overlay .fa-times").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".details-overlay").hide(500);
    });

})(jQuery);

