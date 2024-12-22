document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('menubar');
    const mobileNavbar = document.getElementById('mobile-navbar');
    const navBarIcon = document.getElementById('nav_bar_icon'); 

    // Scroll behavior for navbar
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

        // Close mobileNavbar by default when scrolling
        mobileNavbar.classList.add('overflow-hidden', 'max-h-0');
        mobileNavbar.classList.remove('overflow-auto', 'rounded-b-lg');
        mobileNavbar.style.maxHeight = '0'; // Close by setting max-height to 0
        navBarIcon.checked = false;

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Toggling the navbar on and off
    navBarIcon.addEventListener('change', function () {
        if (navBarIcon.checked) {
            // Expand mobile navbar
            mobileNavbar.classList.remove('overflow-hidden', 'max-h-0');
            mobileNavbar.classList.add('overflow-auto', 'rounded-b-lg');
            mobileNavbar.style.maxHeight = `${mobileNavbar.scrollHeight}px`; // Adjust to fit content
        } else {
            // Collapse mobile navbar
            mobileNavbar.classList.add('overflow-hidden', 'max-h-0');
            mobileNavbar.classList.remove('overflow-auto', 'rounded-b-lg');
            mobileNavbar.style.maxHeight = '0'; // Close by setting max-height to 0
        }
    });
});
