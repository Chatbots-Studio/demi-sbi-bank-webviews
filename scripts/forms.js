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
for (var i = 1950; i <= ThisYear - 6; i++) {
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

setDate('#birth-sertify', '22', 'апрель', '1977');
setDate('#manual', '22', 'апрель', '1977');
setDate('#child-14', '6', 'март', '2000');

function checkDate() {
    var enteredDateModified = new Date(+selectBirthYear.val()+6, month.indexOf(selectMontn.val()), selectDate.val());
    if(enteredDateModified <= ThisDate){
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

