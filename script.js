const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

// margine per non far uscire il bottone fuori dallo schermo
const PADDING = 20;

noBtn.addEventListener("mouseover", () => {
    
  const maxX = window.innerWidth - noBtn.offsetWidth - PADDING;
  const maxY = window.innerHeight - noBtn.offsetHeight - PADDING;
  const x = Math.random() * (maxX - PADDING) + PADDING;
  const y = Math.random() * (maxY - PADDING) + PADDING;

  // usa i backtick per l'interpolazione!
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "translate(0, 0)"; // rimuove il translate iniziale dopo il primo scatto
});


yesBtn.addEventListener("click", () => {
    question.innerHTML = "Sapevo che avresti detto di sì! ❤️🎉";
    noBtn.style.display = "none";
});

