const display = () => {
    const burger = document.querySelector('.burger')
    const navlinks = document.querySelector('.navframes')

    burger.addEventListener('click', () => {

        navlinks.classList.toggle('navlinks-active')

    });
}

display();