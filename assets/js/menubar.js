document.addEventListener("DOMContentLoaded", function () {
    const toggleDropdown = () => {
        const mobileNavbar = document.getElementById('mobile-navbar');
        const menubar = document.getElementById('menubar');

        if (mobileNavbar.classList.contains('max-h-0')) {
            mobileNavbar.classList.remove('rounded-lg');

                mobileNavbar.classList.remove('max-h-0', 'overflow-hidden');
                mobileNavbar.classList.add('max-h-56', 'overflow-auto', 'rounded-b-lg');

        } else {
            mobileNavbar.classList.add('max-h-0', 'overflow-hidden');
            mobileNavbar.classList.remove('max-h-56', 'overflow-auto');

        }
    };

    document.getElementById('navdrop-btn').addEventListener('click', toggleDropdown);
});