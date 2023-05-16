const btn = document.getElementById("submitbtn");
const currentDate = new Date();

btn.addEventListener('click', () => {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();

    console.log(currentYear);

    day = currentDay - day;
    year = currentYear - year;
    month = currentMonth - month;

    document.getElementById("years").innerText = year;
    document.getElementById("months").innerText = month;
    document.getElementById("days").innerText = day;
});