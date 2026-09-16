const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = x / rect.width;
        const yPercent = y / rect.height;

        const rotateY = (xPercent - 0.5) * 30;
        const rotateX = (yPercent - 0.5) * -30;

        card.style.transform =
            `perspective(700px)
             scale(1.1)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        card.style.setProperty("--x", `${xPercent * 100}%`);
        card.style.setProperty("--y", `${yPercent * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(700px) scale(1) rotateX(0deg) rotateY(0deg)";
    });

});