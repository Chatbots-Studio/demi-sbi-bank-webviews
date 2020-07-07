var balance = 5000;
$('#balance').text(balance + ' р.');
$('#do-transfer').click(function() {
    var sum;
    if($('#transfer-sum').val()) {
        sum = parseInt($('#transfer-sum').val());
    } else {
        sum = 1000;
    }
    $('#new-balance').text(+balance+sum);
    $('#cashback').text(sum*0.05);
    $('#sum').text(sum);
    $('#params').css("display", "none");
    $('#transfer-rasult').css("display", "block");
})