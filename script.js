

const checkboxElement = document.querySelector('.changerButton');
const changerLabel = document.querySelector('.changerLabel');

checkboxElement.addEventListener('change', function() {
    if (this.checked) {
        changerLabel.innerHTML = 'Feeling too blue? Click again.'
        document.documentElement.style.setProperty('--accentColor', 'cyan');
        document.documentElement.style.setProperty('--buttonColor', 'cadetblue');
        document.documentElement.style.setProperty('--background2', '#268080');
    } else {
        changerLabel.innerHTML = 'Orange you glad you can click here?'
        document.documentElement.style.setProperty('--accentColor', '#ff8327');
        document.documentElement.style.setProperty('--buttonColor', '#bf2603');
        document.documentElement.style.setProperty('--background2', '#220303');
    };
});