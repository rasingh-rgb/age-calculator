const btn = document.getElementById("submitbtn");


btn.addEventListener('click', () => {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    document.getElementById("years").innerText = year;
    document.getElementById("months").innerText = month;
    document.getElementById("days").innerText = day;
});