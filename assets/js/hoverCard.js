const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
};

const observerHoverCard = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const currentSection = entry.target;
        const currentIndex = Array.from(sections).indexOf(currentSection);
        
        if (entry.isIntersecting) {
            if (currentIndex > 0) {
                const prevSection = sections[currentIndex - 1];
                prevSection.classList.add('blur');
                // prevSection.classList.remove('pt-[13rem]');
            }
            if (currentIndex < sections.length - 1) {
                const nextSection = sections[currentIndex + 1];
                nextSection.classList.remove('blur');
                // nextSection.classList.add('pt-[13rem]');
            }
        } else {
            if (currentIndex > 0) {
                const prevSection = sections[currentIndex - 1];
                prevSection.classList.remove('blur');
                // prevSection.classList.add('pt-[13rem]');
            }
            // if (currentIndex < sections.length - 1) {
            //     const nextSection = sections[currentIndex + 1];
            //     nextSection.classList.remove('blur');
            //     // nextSection.classList.add('pt-[13rem]');
            // }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observerHoverCard.observe(section);
});

