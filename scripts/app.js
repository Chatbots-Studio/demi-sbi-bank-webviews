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