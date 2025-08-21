"use strict";

const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flipBtn");
const resetBtn = document.getElementById("resetBtn");
const resultText = document.getElementById("resultText");
const headsCountEl = document.getElementById("headsCount");
const tailsCountEl = document.getElementById("tailsCount");
const totalCountEl = document.getElementById("totalCount");

let headsCount = 0;
let tailsCount = 0;

function updateStats() {
  headsCountEl.textContent = String(headsCount);
  tailsCountEl.textContent = String(tailsCount);
  totalCountEl.textContent = String(headsCount + tailsCount);
}

function randomOutcome() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

function setAriaLabel(face) {
  const label = face === "heads" ? "Coin showing Heads" : "Coin showing Tails";
  coin.setAttribute("aria-label", label);
}

function enableControls(enabled) {
  flipBtn.disabled = !enabled;
  resetBtn.disabled = !enabled && (headsCount + tailsCount) === 0 ? true : resetBtn.disabled;
}

function clearFlipClasses() {
  coin.classList.remove("flip", "flip-heads", "flip-tails");
  // Force reflow to allow re-triggering the animation
  // eslint-disable-next-line no-unused-expressions
  void coin.offsetWidth;
}

function flipCoin() {
  enableControls(false);

  clearFlipClasses();

  const outcome = randomOutcome();
  const flipClass = outcome === "heads" ? "flip-heads" : "flip-tails";
  coin.classList.add("flip", flipClass);

  // Prepare result text early for assistive tech
  resultText.textContent = outcome === "heads" ? "Heads!" : "Tails!";
  setAriaLabel(outcome);

  const onEnd = () => {
    coin.removeEventListener("animationend", onEnd);

    if (outcome === "heads") headsCount += 1; else tailsCount += 1;
    updateStats();

    enableControls(true);
  };

  coin.addEventListener("animationend", onEnd);
}

function resetGame() {
  headsCount = 0;
  tailsCount = 0;
  updateStats();
  resultText.textContent = "Press Flip to start";
  setAriaLabel("heads");
  clearFlipClasses();
}

flipBtn?.addEventListener("click", flipCoin);
resetBtn?.addEventListener("click", resetGame);

// Initialize
updateStats();
setAriaLabel("heads");


