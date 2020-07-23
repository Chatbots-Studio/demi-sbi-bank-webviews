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
$('#button-send').click(function() {
    url='https://m.me/103229161431509?ref=5';
    if ($('#agree').is(':checked')) {
        $(location).attr('href', url+'y');
    } else {
        $(location).attr('href', url+'n');
    }
});

$('#send-btn').click(function() {
    $(".form-control").removeClass('input-error');
    $('.error-message').hide();
    var incompleteInputs = $(".form-control").filter (function () {
        return !$(this).inputmask("isComplete") 
    });
    if (incompleteInputs.length > 0) {
        $('.error-message').show();
        incompleteInputs.each(function(){
            $(this).addClass('input-error');
        })
    } else {
        var url = "https://m.me/103229161431509?ref=6";
        $(location).attr('href',url);
    } 
});

// ----Input mask----
$(document).ready(function(){
    $('#doc1-series').inputmask({
        mask: "9999",
        placeholder: "1234"
    });
    $('#doc1-number').inputmask({
        mask: "999999",
        placeholder: "123456"
    });
    $('#doc2-number').inputmask({
        mask: "9{11}",
        placeholder: "12345678900"
    });
});
$('#doc-type1').change(function () {
    if($('#doc-type1').val() === "passport") {
        $('#doc1-series').inputmask({
            mask: "9999",
            placeholder: "1234"
        });
        $('#doc1-number').inputmask({
            mask: "999999",
            placeholder: "123456"
        });
    }else if($('#doc-type1').val() === "doc2") {
        $('#doc1-series').inputmask({
            mask: "9",
            placeholder: "1"
        });
        $('#doc1-number').inputmask({
            mask: "9",
            placeholder: "1"
        });
    }
});
$('#doc-type2').change(function () {
    if($('#doc-type2').val() === "snils") {
        $('#doc2-number').inputmask({
            mask: "9{11}",
            placeholder: "12345678900"
        });
    }else if($('#doc-type2').val() === "inn") {
        $('#doc2-number').inputmask({
            mask: "(9{9,10})|(9{12})",
            placeholder: "123456789001"
        });
    }else if($('#doc-type2').val() === "oms") {
        $('#doc2-number').inputmask({
            mask: "9{16}",
            placeholder: "5678123456789001"
        });
    }
})
$(":input").inputmask();

$('#details').click(function (e) {
    e.preventDefault();
    $('.identification').hide();
    $('.more-details').show();
});
$('#back-btn').click(function () {
    $('.more-details').hide();
    $('.identification').css('display', 'flex');
})