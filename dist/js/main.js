$(function () {
    'use strict';

    // Select2 Plugin
    $('.work-select').select2({
        placeholder: 'Please Enter Skills',
        width: 'resolve'
    });

    // put event disapled in select option
    $('.work-select').on('select2:opening select2:closing', function( event ) {
        var $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
    });

    // icon in the select box
    $('.select2-container').append('<div class="icon-select"></div>');
    $('.select2-container .icon-select').append('<i class="fas fa-plus"></i>');

    // show and hide navbar on scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > $('.navbar').innerHeight()) {
            $('.navbar').addClass('hide-navbar');
        } else {
            $('.navbar').removeClass('hide-navbar');
        }
    });
});