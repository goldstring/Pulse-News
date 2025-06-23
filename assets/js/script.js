$(document).ready(function () {

    $('#searchText2').keyup(function () {

        if ($(this).val().trim() === '') {
            $('#newListFilterContainer').hide();
            $('#menu_list').show();
        } else {
            $('#newListFilterContainer').show();
            $('#menu_list').hide();
        }

    });

    $("#newsCardSlider").owlCarousel({
        loop: true,
        margin: 16,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 4 }
        }
    });


});