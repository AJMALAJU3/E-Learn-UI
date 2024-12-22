const contentObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio >= 0.5) { 
                    const contentElement = entry.target.querySelector('.content-section__text');
                    const content = 'Speak English like you’ve always dreamed – effortlessly.Trusted by learners in 30+ countries!';
                    const words = content.split(' ');
                    words.forEach((word, ind) => {
                        const wordSpan = document.createElement('span');
                        wordSpan.classList.add('inline-block', 'mr-2');

                        word.split('').forEach((letter, index) => {
                            let letterSpan = document.createElement('span');
                            letterSpan.textContent = letter;
                            letterSpan.classList.add('inline-block'); 
                            if((index + ind) % 5 === 4){
                                letterSpan.classList.add('opacity-0', 'transition-opacity', 'duration-300', 'letter-fade1');
                            } else if (index % 5 === 4) {
                                letterSpan.classList.add('opacity-0', 'transition-opacity', 'duration-300', 'letter-fade2');
                            } else if ((index + ind) % 5 === 0) {
                                letterSpan.classList.add('opacity-0', 'transition-opacity', 'duration-300', 'letter-fade2');
                            } else if ((index + ind) % 5 === 1) {
                                letterSpan.classList.add('opacity-0', 'transition-opacity', 'duration-300', 'letter-fade3');
                            } else {
                                letterSpan.classList.add('opacity-100');
                            }
                            wordSpan.appendChild(letterSpan);
                        });

                        contentElement.appendChild(wordSpan);
                        const space = document.createTextNode(' '); 
                        contentElement.appendChild(space);
                    });

                    contentObserver.unobserve(entry.target);
                }
            }
        });
    },
    {
        threshold: 0.6, 
    }
);

document.querySelectorAll('.content-section').forEach((el) => contentObserver.observe(el));
