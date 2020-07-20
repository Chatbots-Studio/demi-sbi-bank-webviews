flatpickr.localize(flatpickr.l10ns.ru);
$("#datepicker").flatpickr({
    altInput: true,
    enableTime: true,
    dateFormat: "H:i",
    time_24hr: true,
    altFormat: "j F Y, H:i",
    dateFormat: "d-m-Y H:i",
    minDate: "today",
    inline: true,
    locale: {
        firstDayOfWeek: 1
    }
});
$('#save-date-button').click(function(){
    var ThisDate = new Date(),
        enteredDate = $("#datepicker").val();
    if(enteredDate <= ThisDate){
        $('.form-error').css('display', 'block');
    }else {
        $('.form-error').css('display', 'none');
        var url = "https://m.me/103229161431509?ref=" + enteredDate.replace(/ /g, '-');
        $(location).attr('href',url);
    }
    
});
