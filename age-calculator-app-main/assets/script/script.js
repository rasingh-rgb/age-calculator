const btn = document.getElementById("submitbtn");


btn.addEventListener('click', () => {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let currentYear = 2023;
    let currentMonth = 5;
    let currentDay = 5;

    document.getElementById("years").innerText = currentYear - year + "YEAR";
    document.getElementById("months").innerText = currentMonth - month + "MONTHS";
    document.getElementById("days").innerText = currentDay - day + "DAYS";



});