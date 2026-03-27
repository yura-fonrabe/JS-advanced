'use strict';

function countdown() {
    
    let date1 = new Date(2026, 11, 31, 23, 59, 59);
    let date2 = new Date();
    let dateTemp = 0;
    let diff = Math.floor((date1.getTime() - date2.getTime()) / 1000)
    
    //Получим разность месяцев
    let monthes = monthDifference(date1, date2);
    let startMonth = date2.getMonth();
    //выводим месяцы
    date2.setMonth(startMonth + monthes);
    if (monthes < 10) monthes = '0' + monthes;
    document.querySelector('.timer__month').textContent = monthes;

    //изменим дату на количество месяцев для расчета остальных показателей
    let remainder = Math.floor((date1.getTime() - date2.getTime()) / 1000);

    // выводим оставшиеся дни
    dateTemp = Math.floor(remainder / (24 * 60 * 60));
    remainder -= dateTemp * 24 * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('.timer__days').textContent = dateTemp;

    // часы
    dateTemp = Math.floor(remainder / (60 * 60));
    remainder -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('.timer__hours').textContent = dateTemp;

    // минуты
    dateTemp = Math.floor(remainder / 60);
    remainder -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('.timer__minutes').textContent = dateTemp;

    //секунды
    if (remainder < 10) remainder = '0' + remainder;
    document.querySelector('.timer__seconds').textContent = remainder;

    // console.log(diff);
    if (diff === 0) {
        clearInterval(timerId);
    }
}

function monthDifference(startDate, endDate) {

    // Получаем месяц для каждой даты
    const startMonth = startDate.getMonth();
    const endMonth = endDate.getMonth();

    // Вычисляем разницу в месяцах
    let monthDiff = startMonth - endMonth;

    // Проверяем дни
    if (endDate.getDate() > startDate.getDate()) {
        monthDiff--;
    }
    return monthDiff;
}

const timerId = setInterval(countdown, 1000);