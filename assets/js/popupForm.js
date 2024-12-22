window.onload = function () {
    const popup = document.getElementById('popupForm');
    const container = document.getElementById('form-container')
    const closeBtn = document.getElementById('close-btn');

    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; 

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = ''; 
        container.classList.add('hidden')
    });
};