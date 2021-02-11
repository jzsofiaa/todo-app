function currentDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();

    let weekDay = week[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();

    document.getElementById('current-date').innerHTML = `${weekDay}, ${month} ${day}`;
}

currentDate();