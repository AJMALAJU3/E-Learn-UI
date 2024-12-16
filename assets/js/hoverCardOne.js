document.addEventListener("DOMContentLoaded", () => {
    function swapPositions(id1, id2) {
        const elem1 = document.getElementById(id1);
        const elem2 = document.getElementById(id2);

        const pos1 = elem1.getBoundingClientRect();
        const pos2 = elem2.getBoundingClientRect();

        elem1.style.transition = "transform 1s ease";
        elem2.style.transition = "transform 1s ease";

        elem1.style.transform = `translate(${pos2.left - pos1.left}px, ${pos2.top - pos1.top}px)`;
        elem2.style.transform = `translate(${pos1.left - pos2.left}px, ${pos1.top - pos2.top}px)`;
        setTimeout(() => {
            elem1.style.transform = "";
            elem2.style.transform = "";
        }, 1000);
    }

    

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                swapPositions('e','f');
                swapPositions('d','c');
                setTimeout(()=>{
                    swapPositions('g','h');
                    swapPositions('i','j');
                    swapPositions('a','b');
                },1000)
            }
        });
    }

    const observerHoverone = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const container = document.getElementById("container");
    observerHoverone.observe(container);
});
