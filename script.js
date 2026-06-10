const heroName = document.querySelector("#heroName");
const nameInput = document.querySelector("#nameInput");

const levelText = document.querySelector("#levelText");
const hpText = document.querySelector("#hpText");
const xpText = document.querySelector("#xpText");
const logText = document.querySelector("#logText");

const changeNameButton = document.querySelector("#changeNameButton");
const trainButton = document.querySelector("#trainButton");
const damageButton = document.querySelector("#damageButton");
const healButton = document.querySelector("#healButton");
const themeButton = document.querySelector("#themeButton");

let level = 1;
let hp = 100;
let xp = 0;

function updateStats() {
  levelText.textContent = level;
  hpText.textContent = hp;
  xpText.textContent = xp;
}

function addLog(message) {
  logText.textContent = message;
}

function changeName() {
  const newName = nameInput.value;

  if (newName === "") {
    addLog("Please enter a hero name first.");
    return;
  }

  heroName.textContent = newName;
  addLog("Hero name changed to " + newName + ".");
  nameInput.value = "";
}

function trainHero() {
  xp = xp + 10;

  if (xp >= 100) {
    xp = 0;
    level = level + 1;
    addLog("Level up! Your hero is now level " + level + ".");
  } else {
    addLog("Training complete. +10 XP.");
  }

  updateStats();
}

function damageHero() {
  hp = hp - 15;

  if (hp <= 0) {
    hp = 0;
    addLog("Your hero is defeated!");
  } else {
    addLog("Ouch! Your hero took 15 damage.");
  }

  updateStats();
}

function healHero() {
  hp = hp + 10;

  if (hp > 100) {
    hp = 100;
  }

  addLog("Your hero healed 10 HP.");
  updateStats();
}

function changeTheme() {
  document.body.classList.toggle("dark");
  addLog("Theme changed.");
}

changeNameButton.addEventListener("click", changeName);
trainButton.addEventListener("click", trainHero);
damageButton.addEventListener("click", damageHero);
healButton.addEventListener("click", healHero);
themeButton.addEventListener("click", changeTheme);

updateStats(); 

function myFunction() {
  document.getElementById("damageButton").classList.toggle("dark")
}

document.querySelector(".log-box").addEventListener("click", myFunction) 
