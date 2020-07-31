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
    $('#doc1-s-passport').inputmask({mask: '9999'});
    $('#doc1-n-passport').inputmask({mask: '999999'});
    $('.doc2-snils').inputmask({mask: '9{11}'});
});

function createInput (parentEl, placeholder, inputMask) {
    $(parentEl).append(
        $('<input>', {
            "class": 'input-field form-control',
            'type': "text",
            'placeholder': placeholder,
        }).inputmask({mask: inputMask})
    );
};

$('#doc-type1').change(function () {
    $('#series1 input, #number1 input').remove();
    if($('#doc-type1').val() === "passport") {
        createInput ('#series1', '1234', '9999');
        createInput ('#number1', '123456', '999999');
    }else if($('#doc-type1').val() === "doc2") {
        createInput ('#series1', '2', '9');
        createInput ('#number1', '2', '9');
    }else if($('#doc-type1').val() === "doc3") {
        createInput ('#series1', '3', '9');
        createInput ('#number1', '3', '9');
    }else if($('#doc-type1').val() === "doc4") {
        createInput ('#series1', '4', '9');
        createInput ('#number1', '4', '9');
    }
});
$('#doc-type2').change(function () {
    $('#number2 input').remove();
    if($('#doc-type2').val() === "snils") {
        createInput ('#number2', '12345678900', '9{11}');
    }else if($('#doc-type2').val() === "inn") {
        createInput ('#number2', '123456789001', '(9{9,10})|(9{12})');
    }else if($('#doc-type2').val() === "oms") {
        createInput ('#number2', '5678123456789001', '9{16}');
    }
});

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