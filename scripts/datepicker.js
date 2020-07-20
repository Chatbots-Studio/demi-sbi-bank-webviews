flatpickr.localize(flatpickr.l10ns.ru);
$("#datepicker").flatpickr({
    altInput: true,
    enableTime: true,
    dateFormat: "H:i",
    time_24hr: true,
    altFormat: "j F Y, H:i",
    dateFormat: "d-m-Y H:i",
    minDate: "today",
    locale: {
        firstDayOfWeek: 1
    }
});
