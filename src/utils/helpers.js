import Bullet from "../bullet";

export function shootAlienBullet(alien, cannonX, gameState) {
  const bulletSpeed = gameState.rageMode ? 7 : 5; // Faster bullets in rage mode
  const bulletColor = gameState.rageMode ? "#ff0000" : "#00ff00"; // Change color during rage mode

  const bulletX = alien.x + alien._spriteA.w / 2;
  const bulletY = alien.y + alien._spriteA.h;
  gameState.bullets.push(
    new Bullet(bulletX, bulletY, bulletSpeed, 4, 6, bulletColor, "alien")
  );
}

export function canAlienShoot(alien, gameState) {
  return !gameState.aliens.some((otherAlien) => {
    // Check if otherAlien is not destroyed
    if (otherAlien.destroyed) return false;

    // Check if otherAlien is in front (i.e., has a higher y position)
    if (otherAlien.y > alien.y) {
      // Use the correct width of the sprites for horizontal overlap check
      return (
        otherAlien.x < alien.x + alien._spriteA.w && // Alien's width
        otherAlien.x + otherAlien._spriteA.w > alien.x // Other alien's width
      );
    }

    return false;
  });
}

export function checkForRageMode(gameState) {
  if (gameState.rageMode === true) {
    return;
  }

  const rowsCleared = gameState.aliens.every(
    (alien) => alien.y !== 30 || alien.destroyed
  );

  if (gameState.killStreak >= 12 || rowsCleared) {
    // Trigger rage mode
    gameState.rageMode = true;
    gameState.rageModeStartTime = performance.now();

    // Reset kill streak after rage mode triggers
    gameState.killStreak = 0;

    // Change all alien shoot cooldowns and bullet speed
    gameState.aliens.forEach((alien) => {
      alien.shootCooldown /= 2; // Shoot twice as fast
    });
  }
}

export function drawLoadingBar(gameState, ctx, canvas) {
  const elapsedTime = performance.now() - gameState.loadingBarStartTime;
  const progress = Math.min(elapsedTime / gameState.loadingBarDuration, 1);
  ctx.fillStyle = "#000";
  // Draw the loading bar background
  ctx.fillRect(0, 0, canvas.width, gameState.loadingBarHeight);
  ctx.fillStyle = "#fff";
  // Draw the loading bar foreground
  ctx.fillRect(0, 0, canvas.width * progress, gameState.loadingBarHeight);
}

export function resetCannonPosition(gameState, canvas) {
  if (gameState.cannon.x <= 0) {
    gameState.cannon.x = canvas.width - 10; // Move to the right side
  } else if (gameState.cannon.x >= canvas.width - 10) {
    gameState.cannon.x = 0; // Move to the left side
  }
}

export function updateInterface(level, score, nextLifeScore) {
  document.getElementById("level-display").textContent = level;
  document.getElementById("score-display").textContent = score;
  document.getElementById("next-life-display").textContent = nextLifeScore;
}

export function increaseScore(gameState, nextLevel = false) {
  gameState.score += nextLevel ? gameState.level * 1000 : gameState.level * 100;

  if (gameState.score >= gameState.nextLifeScore) {
    gameState.lifes += 1;
    gameState.nextLifeScore *= 2;
  }
  updateInterface(gameState.level, gameState.score, gameState.nextLifeScore);
}

export function showNextLevelButton() {
  const button = document.getElementById("next-level-button");
  button.style.display = "block";
}

export function showRestartButton() {
  const button = document.getElementById("restart-level-button");
  button.style.display = "block";
}

export function hideNextLevelButton() {
  const button = document.getElementById("next-level-button");
  button.style.display = "none";
}

export function hideRestartButton() {
  const button = document.getElementById("restart-level-button");
  button.style.display = "none";
}

export function generateRandomMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      // Randomly assign 0 or 1
      row.push(Math.random() < 0.5 ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
