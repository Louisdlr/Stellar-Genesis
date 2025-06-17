let energy = 0;
let energyPerSecond = 0;

    const energyDisplay = document.getElementById("energy");
    const epsDisplay = document.getElementById("eps");
    const clicker = document.getElementById("clicker");
    const shopItems = document.querySelectorAll(".shop-item");
    const stageDisplay = document.getElementById("stage");

const starfield = document.getElementById('starfield');
const starCount = 200;
const stars = [];

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.opacity = 0.3 + Math.random() * 0.7;

  starfield.appendChild(star);
  stars.push({ el: star, x, y });
}

// mouvement des étoiles selon position du curseur
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  stars.forEach(star => {
    const dx = star.x - mouseX;
    const dy = star.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      const angle = Math.atan2(dy, dx);
      const offset = (100 - distance) / 10;
      const offsetX = Math.cos(angle) * offset;
      const offsetY = Math.sin(angle) * offset;
      star.el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    } else {
      star.el.style.transform = `translate(0, 0)`;
    }
  });
});

const earthClick = document.getElementById('clicker');

earthClick.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);

    clicker.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 800);
  }
});


    clicker.addEventListener("click", () => {
      energy++;
      updateDisplay();
    });

    setInterval(() => {
      energy += energyPerSecond;
      updateDisplay();
    }, 1000);
    // gestion des achats + mpontée des prix
   shopItems.forEach(item => {
  const name = item.querySelector("h3")?.textContent || item.textContent.split("\n")[0];

  item.addEventListener("click", () => {
    const cost = parseInt(item.getAttribute("data-cost"));
    const power = parseInt(item.getAttribute("data-power"));

    if (energy >= cost) {
      energy -= cost;
      energyPerSecond += power;

      if (!purchasedUpgrades[name]) purchasedUpgrades[name] = 0;
      purchasedUpgrades[name]++;
      updateUpgradeList();

    const newCost = Math.floor(cost * 1.3);
    item.setAttribute("data-cost", newCost);
    const costElem = item.querySelector(".cost");
    if (costElem) costElem.textContent = `Coût : ${newCost} ⚡`;


      updateDisplay();
      updateStage();
      saveGame();
    }
  });
});



    function updateDisplay() {
      energyDisplay.textContent = energy;
      epsDisplay.textContent = energyPerSecond;
    }

    function updateStage() {
      if (energyPerSecond >= 1 && energyPerSecond < 10) {
        stageDisplay.textContent = "Stade actuel : Formation des planètes";
      } else if (energyPerSecond >= 10 && energyPerSecond < 50) {
        stageDisplay.textContent = "Stade actuel : Système solaire naissant";
      } else if (energyPerSecond >= 50 && energyPerSecond < 100) {
        stageDisplay.textContent = "Stade actuel : Expansion galactique";
      } else if (energyPerSecond >= 100) {
        stageDisplay.textContent = "Stade actuel : Créateur d’univers";
      }
    }
    function checkSpecialUpgradeUnlock() {
  const satellite = ownedUpgrades["Satellite Collecteur"] || 0;
  const planet = ownedUpgrades["Formation de planète"] || 0;
  const star = ownedUpgrades["Étoile naissante"] || 0;
  const blackhole = ownedUpgrades["Mini trou noir"] || 0;

  if (
    satellite >= 2 && planet >= 1 && star >= 1 && blackhole >= 1
  ) {
    document.getElementById("supernova-upgrade").classList.remove("hidden");
  }
}


setInterval(() => {
  saveGame();
}, 60000); // sauvegarde automatique toutes les 60 secondes


document.getElementById("save-btn").addEventListener("click", saveGame);

function saveGame() {
  const data = {
    energy,
    energyPerSecond,
    purchasedUpgrades
  };
  localStorage.setItem("stellarSave", JSON.stringify(data));
  console.log("Partie sauvegardée !");
}

// charge la page
window.addEventListener("load", () => {
  const saved = localStorage.getItem("stellarSave");
  if (saved) {
    const data = JSON.parse(saved);
    energy = data.energy || 0;
    energyPerSecond = data.energyPerSecond || 0;
    Object.assign(purchasedUpgrades, data.purchasedUpgrades || {});
    updateDisplay();
    updateStage();
    updateUpgradeList();
    console.log("Partie chargée !");
  }
});

const resetBtn = document.getElementById("reset-btn");
const resetPopup = document.getElementById("reset-confirm-popup");
const confirmReset = document.getElementById("confirm-reset");
const cancelReset = document.getElementById("cancel-reset");

resetBtn.addEventListener("click", () => {
  resetPopup.classList.add("active");
});

confirmReset.addEventListener("click", () => {
  localStorage.removeItem("stellarSave");
  location.reload();
});

cancelReset.addEventListener("click", () => {
  resetPopup.classList.remove("active");
});

// menu toggle en haut à gauche
const menuToggle = document.getElementById("menu-toggle");
const menuContent = document.getElementById("menu-content");

menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("open");
});


const purchasedUpgrades = {};

document.querySelectorAll(".shop-item").forEach(item => {
  item.addEventListener("click", () => {
    const name = item.querySelector("h3")?.textContent || item.textContent.split("\n")[0];
    purchasedUpgrades[name] = (purchasedUpgrades[name] || 0) + 1;
    updateUpgradeList();
  });
});

function updateUpgradeList() {
  const list = document.getElementById("purchased-upgrades");
  if (!list) return;
  list.innerHTML = "";
  for (const [name, count] of Object.entries(purchasedUpgrades)) {
    const li = document.createElement("li");
    li.textContent = `${name} x${count}`;
    list.appendChild(li);
  }
}

const openPopupBtn = document.getElementById("open-upgrade-popup");
const closePopupBtn = document.getElementById("close-upgrade-popup");
const popup = document.getElementById("upgrade-popup");

openPopupBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});


