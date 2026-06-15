// Ziel-Datum des Countdowns (lokale Zeit): 31.12.2026 23:59:59
const TARGET_DATE = new Date("2026-12-31T23:59:59");

const countdownEl = document.getElementById("countdown");
const successEl = document.getElementById("success");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let intervalId;

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    clearInterval(intervalId);
    countdownEl.classList.add("hidden");
    successEl.classList.remove("hidden");
    successEl.classList.add("show");
    spawnConfetti();
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

function spawnConfetti() {
  const emojis = ["🎉", "✨", "🎊", "🥳"];

  // Kleine Emoji-Konfetti-Animation ohne externe Bibliotheken.
  for (let i = 0; i < 24; i += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.textContent = emojis[i % emojis.length];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 0.6}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2600);
  }
}

updateCountdown();
intervalId = setInterval(updateCountdown, 1000);
