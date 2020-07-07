$('.show-popup').click(function(e) {
    var message;
    if(e.target.id == "sms") {
        message = "СМС с реквизитами отправлено";
    }else if(e.target.id == "cvv"){
        message = "CVV скопирован в буфер обмена";
    }else if(e.target.id == "number"){
        message = "Номер карты скопирован в буфер обмена";
    }else if(e.target.id == "term"){
        message = "Срок действия карты скопирован в буфер обмена";
    }
    $('#popup-text').text(message);
    $('#overlay').css('display', 'flex');
});
function closePopup() {
    $('#overlay').css('display', 'none');
}
$('#ok').click(closePopup);
$('#overlay').click(function(e){
    e.stopPropagation();
    if(!$(e.target).hasClass('popup')) {
        if (!$(e.target).hasClass('popup-text')) {
            closePopup();
        }
    }
})