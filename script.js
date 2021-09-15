
// const colorVariableClass = document.querySelectorAll('.accentColor')

// colorVariableClass[1].classList.add('kewlStuff')



// console.log(colorVariableClass)

const buttonElement = document.querySelector('.changerButton')

buttonElement.addEventListener('click', function() {
    console.log('clickeroooo')

    document.documentElement.style.setProperty('--accentColor', 'cyan');
    document.documentElement.style.setProperty('--buttonColor', '#cadetblue');
    document.documentElement.style.setProperty('--background2', 'cadetblue');


    // colorVariableClass.forEach(everyThing => {
    //     everyThing.classList.toggle('kewlStuff')
    // })

})