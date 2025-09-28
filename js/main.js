const currDate = new Date();
const currYear = currDate.getFullYear();

document.querySelector('.copyright-year').textContent = currYear;
document.querySelector('.copyright-year').setAttribute('datetime', currYear);