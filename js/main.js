const currDate = new Date();
const currYear = currDate.getFullYear();

document.querySelector('time').textContent = currYear;
document.querySelector('time').setAttribute('datetime', currYear);