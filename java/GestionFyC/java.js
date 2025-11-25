const elements=document.querySelectorAll(".fade, .card");

function appear() {
    const trigger=window.innerHeight * 0.85;

    elements.forEach(el=> {
            const top=el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("visible");
            }
        });
}

window.addEventListener("scroll", appear);
appear();