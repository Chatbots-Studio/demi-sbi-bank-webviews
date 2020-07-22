var selectDate = $('#date'),
    selectMontn = $('#month'),
    selectYear = $('#year'),
    selectBirthYear = $('#birth-year'),
    date = [],
    month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    year = [],
    childBirthYear = [],
    ThisYear = new Date().getFullYear(),
    ThisDate = new Date();
for (var i = 1; i <= 31; i++) { 
    date.push(i);
}
for (var i = 1950; i <= ThisYear; i++) { 
    year.push(i);
}
for (var i = (ThisYear - 6); i >= (ThisYear - 18); i--) {
    childBirthYear.push(i);
}
function fillSelect(select, options) {
    $(options).each(function (index, element) {
        select.append($('<option>', {
            value: element,
            text: element
        }))
    })
}
function setDate (pageId, date, month, year) {
    $(pageId).find($('#date')).val(date);
    $(pageId).find($('#month')).val(month);
    $(pageId).find($('#year')).val(year);
}
fillSelect(selectDate, date);
fillSelect(selectMontn, month);
fillSelect(selectYear, year);
fillSelect(selectBirthYear, childBirthYear);

// setDate('#birth-sertify-filled', '22', 'апрель', '1977');
// setDate('#manual-filled', '22', 'апрель', '1977');

function checkDate() {
    var enteredDateMax = new Date(+selectBirthYear.val()+6, month.indexOf(selectMontn.val()), selectDate.val()),
        enteredDateMin = new Date(+selectBirthYear.val()+18, month.indexOf(selectMontn.val()), selectDate.val());
    if(enteredDateMax <= ThisDate && enteredDateMin > ThisDate){
        $('#save-button').removeClass('disabled');
        $('.form-error').css('display', 'none');
    }else {
        $('#save-button').addClass('disabled');
        $('.form-error').css('display', 'block');
    }
}
$('#birth-date').find('.select-item').on('change', checkDate);
$('#save-button').click(function(){
    checkDate();
    if($('#save-button').hasClass('disabled')) {
        return;
    } else {
        var birthYear = selectBirthYear.val(),
            birthMonth =  (((month.indexOf(selectMontn.val())+1).toString().length) == 1) ? '0'+(month.indexOf(selectMontn.val())+1) : (month.indexOf(selectMontn.val())+1),
            birthDate = ((selectDate.val().toString().length) == 1) ? '0' + (selectDate.val()) : (selectDate.val()),
            url = "https://m.me/103229161431509?ref=" + birthDate + "_" + birthMonth + "_" + birthYear;
        $(location).attr('href',url);
    }
});
$(document).ready(function(){
    $(":input").inputmask();
    $('.text-mask').inputmask({
        mask: "a{1,20}[-][a{1,20}][-][a{1,20}]",
        greedy: false,
        casing: 'title',
        });
    $('.tel-mask').inputmask({
        mask: "+79999999999"
    });
    $('#doc-series').inputmask({
        mask: "AAA-AA"
    });
    $('#passport-series').inputmask({
        mask: "9999"
    });
    $('#doc-number').inputmask({
        mask: "999999"
    });
});
$('#ok-button').click(function() {
    $(".form-control").removeClass('input-error');
    $('.error-message').hide();
    var incompleteInputs = $(".form-control").filter (function () {
        return !$(this).inputmask("isComplete") 
    });
    if (incompleteInputs.length > 0 || !$('input[name="sex"]:checked').val()) {
        $('.error-message').show();
        incompleteInputs.each(function(){
            $(this).addClass('input-error');
        })
    } else {
        var url = "https://m.me/103229161431509?ref=4";
        $(location).attr('href',url);
    } 
});
$(document).ready(function(){
    if(window.location.search){
        var ref = '?ref=',
        str = window.location.search,
        date = str.replace(ref, '');
        $('#get-birth-date').text(date);
    }else {
        $('#get-birth-date').text('Нет данных');
    }
})

