var balance = 5000;
$('#balance').html(balance + ' &#8381;');
$('#do-transfer').click(function() {
    var sum;
    if($('#transfer-sum').val()) {
        sum = parseInt($('#transfer-sum').val());
    } else {
        sum = 1000;
    }
    $('#new-balance').html(+balance+sum + ' &#8381;');
    $('#cashback').html(sum*0.05 + ' &#8381;');
    $('#sum').html(sum + ' &#8381;');
    $('#params').css("display", "none");
    $('#transfer-rasult').css("display", "block");
})