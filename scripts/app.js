var fileUpload = $('#file-upload'),
    fileUploadSelfy = $('#file-upload-selfy');
fileUpload.change(function() {
    if(fileUpload.val()) {
        $(".download-file").css('display', 'none');
        $("#download-sertify-message-1").css('display', "block");
    }
});
fileUploadSelfy.change(function() {
    if(fileUploadSelfy.val()) {
        $("#download-sertify-message-1").css('display', 'none');
        $("#download-sertify-message-2").css('display', "block");
    }
});
$('#save-button').click(function() {
    $('#flow-error').hide();
    var checkedVal = $("input[name='data-check']:checked").val(),
        url;
    if ($('#save-button').hasClass('save-button-1')) {
        url = 'https://m.me/103229161431509?ref=1';
    } else if ($('#save-button').hasClass('save-button-2')) {
        url = 'https://m.me/103229161431509?ref=2';
    }
    if (checkedVal) {
        var newUrl =  url + checkedVal;
        $(location).attr('href', newUrl);
    } else {
        $('#flow-error').show();
    }
});
$('#details').click(function (e) {
    e.preventDefault();
    $('#flow').hide();
    $('.more-details').show();
});
$('#back-btn').click(function () {
    $('.more-details').hide();
    $('#flow').css('display', 'flex');
})