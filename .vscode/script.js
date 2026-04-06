document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.remove('animate-pro');
            void card.offsetWidth; 
            card.classList.add('animate-pro');

            const title = card.querySelector('h2').innerText;
            if (title.includes("Japan")) document.body.style.backgroundColor = "#ffebeb";
            if (title.includes("Thailand")) document.body.style.backgroundColor = "#fff9e6";
            if (title.includes("China")) document.body.style.backgroundColor = "#e6f7ff";
            if (title.includes("Australia")) document.body.style.backgroundColor = "#e6ffed";
        });
    });
    function showTime() {
    let now = new Date().toLocaleTimeString();
    document.getElementById("live-clock").innerText = now;
}

setInterval(showTime, 1000);
showTime();
});