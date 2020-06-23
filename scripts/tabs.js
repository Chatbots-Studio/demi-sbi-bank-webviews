$('.identification-tab').click(function(e) {
    if ($(e.target).hasClass('active')) {
        return
    } else {
        $('.identification-tab').removeClass('active');
        $(e.target).addClass('active');
        if ($(e.target).attr('id') === "tab-1") {
            $('.form-wrapper').removeAttr('style');
            $('#content-2').css('display', 'none');
            $("#content-1").css('display', 'block')
        } else if ($(e.target).attr('id') === "tab-2") {
            $('.form-wrapper').removeAttr('style');
            $('#content-1').css('display', 'none');
            $("#content-2").css('display', 'block')
        }
    }
})