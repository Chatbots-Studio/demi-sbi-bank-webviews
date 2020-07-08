$('.wallet-tab').click(function(e) {
    if ($(e.target).hasClass('active')) {
        return
    } else {
        $('.wallet-tab').removeClass('active');
        $(e.target).addClass('active');
        if ($(e.target).attr('id') === "tab-1") {
            $('.wallet-content').removeAttr('style');
            $('#google').css('display', 'none');
            $("#apple").css('display', 'block')
        } else if ($(e.target).attr('id') === "tab-2") {
            $('.wallet-content').removeAttr('style');
            $('#apple').css('display', 'none');
            $("#google").css('display', 'block');
        }
    }
})