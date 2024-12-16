document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('menubar');
    const mobileNavbar = document.getElementById('mobile-navbar');
    const navDropdownButton = document.getElementById('navdrop-btn');

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            navbar.classList.add('-top-20');
            navbar.classList.remove('top-5');
        } else {
            navbar.classList.remove('-top-20');
            navbar.classList.add('top-5');
        }

        if (currentScroll === 0) {
            navbar.classList.add('top-5');
            navbar.classList.remove('-top-20');
        }

        mobileNavbar.classList.add('max-h-0', 'overflow-hidden');
        mobileNavbar.classList.remove('max-h-56', 'overflow-auto');

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    });

    const toggleDropdown = () => {
        if (mobileNavbar.classList.contains('max-h-0')) {
            mobileNavbar.classList.remove('rounded-lg');
            mobileNavbar.classList.remove('max-h-0', 'overflow-hidden');
            mobileNavbar.classList.add('max-h-56', 'overflow-auto', 'rounded-b-lg');
        } else {
            mobileNavbar.classList.add('max-h-0', 'overflow-hidden');
            mobileNavbar.classList.remove('max-h-56', 'overflow-auto');
        }
    };

    navDropdownButton.addEventListener('click', toggleDropdown);
});
