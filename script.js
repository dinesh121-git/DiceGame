window.addEventListener('load', () => {
  const navType = performance.getEntriesByType("navigation")[0].type;

  if (navType === "reload") {
    const one = Math.floor(Math.random() * 6) + 1;
    const two = Math.floor(Math.random() * 6) + 1;

    // Player 1
    if (one == 1) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg";
    }
    if (one == 2) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg";
    }
    if (one == 3) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg";
    }
    if (one == 4) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg";
    }
    if (one == 5) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg";
    }
    if (one == 6) {
      document.getElementById("plyer1").src = "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg";
    }

    // Player 2
    if (two == 1) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg";
    }
    if (two == 2) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg";
    }
    if (two == 3) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg";
    }
    if (two == 4) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg";
    }
    if (two == 5) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg";
    }
    if (two == 6) {
      document.getElementById("plyer2").src = "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg";
    }

    // Decide Winner
    if (one > two) {
      document.getElementById("final").textContent = "Player 1 wins";
    } else if (two > one) {
      document.getElementById("final").textContent = "Player 2 wins";
    } else {
      document.getElementById("final").textContent = "It's a tie!";
    }
  }
});



