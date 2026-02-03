const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");


function moveNo() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// PC: mouseover
noBtn.addEventListener("mouseover", moveNo);

// Mobile: touch
noBtn.addEventListener("touchstart", moveNo);


yesBtn.addEventListener("click", () => {
    question.innerHTML = "Sapevo che avresti detto di sì! ❤️🎉";
    noBtn.style.display = "none";
});



