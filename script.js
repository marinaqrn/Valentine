
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

let scale = 1; // dimensione iniziale del "Sì"
let firstMoveDone = false; // per gestire l'eventuale reset del transform del NO

// Cresce il Sì quando passi sul NO
noBtn.addEventListener("mouseenter", () => {
    scale = Math.min(scale + 0.1, 3); // limita a 3x
    yesBtn.style.transform = `scale(${scale})`;
});

f
unction moveNo() {
    // Se nel CSS avevi transform: translate(-50%, -50%), lo azzeriamo al primo movimento
    if (!firstMoveDone) {
        noBtn.style.transform = ""; 
        firstMoveDone = true;
    }

    const padding = 10; // margine dai bordi
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = padding + Math.random() * maxX;
    const y = padding + Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// PC: scappa all'hover
noBtn.addEventListener("mouseover", moveNo);

// Mobile: scappa al tocco (evitiamo il click)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNo();
}, { passive: false });

// Click su Sì
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Sapevo che avresti detto di sì! ❤️🎉";
    noBtn.style.display = "none";
});



