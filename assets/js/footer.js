document.addEventListener("DOMContentLoaded", () => {
    const slidingDiv = document.querySelector(".sliding-div");

    const observerSlideup = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in");
                } else {
                    entry.target.classList.remove("slide-in");
                }
            });
        },
        { threshold: 0.3 }
    );

    observerSlideup.observe(slidingDiv);

    const animatedText = document.querySelectorAll(".text-animate");
    const textObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                }
            });
        },
        { threshold: 0.5 }
    );

    animatedText.forEach((text) => {
        text.style.animationPlayState = "paused";
        textObserver.observe(text);
    });
});
