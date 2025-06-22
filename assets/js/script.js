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
});