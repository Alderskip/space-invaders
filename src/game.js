import Sprite from "./sprite";
import Cannon from "./cannon";
import Bullet from "./bullet";
import Alien from "./alien";
import Bunker from "./bunker";
import InputHandler from "./input-handler";

import assetPath from "../assets/invaders.png";
import {
  isBulletIntersects,
  detectAlienBulletCollision,
} from "./utils/collision";
import {
  resetCannonPosition,
  drawLoadingBar,
  checkForRageMode,
  increaseScore,
  showNextLevelButton,
  showRestartButton,
  generateRandomMatrix,
  hideNextLevelButton,
  hideRestartButton,
} from "./utils/helpers";

import { drawCannonLifes, drawGameLoss, drawGameWinning } from "./interface";
let assets;
const sprites = {
  aliens: [],
  cannon: null,
  bunker: null,
};
const gameState = {
  bullets: [],
  aliens: [],
  cannon: null,

  //rage mode
  killStreak: 0,
  rageMode: false,
  rageModeDuration: 3000, // Rage mode duration (5 seconds)
  rageModeStartTime: 0, // Time when rage mode started

  //borders move
  loadingBarActive: false,
  loadingBarStartTime: 0,
  loadingBarDuration: 3000, // 3 seconds
  loadingBarHeight: 10,

  //alien movements
  alienMoveDirection: 1,
  lastAlienMoveTime: 0,
  alienMoveInterval: 1500, // 1.5 seconds
  alienMoveDistance: 30,
  alienMoveDownDistance: 30,

  //game over
  lifes: 3,
  gameOver: false,

  //levels
  score: 0,
  level: 1,
  nextLifeScore: 1000, // Score threshold for extra life
};

const inputHandler = new InputHandler();

export function preload(onPreloadComplete) {
  assets = new Image();
  assets.addEventListener("load", () => {
    sprites.cannon = new Sprite(assets, 62, 0, 22, 16);
    sprites.bunker = new Sprite(assets, 84, 8, 36, 24);
    sprites.aliens = [
      [new Sprite(assets, 0, 0, 22, 16), new Sprite(assets, 0, 16, 22, 16)],
      [new Sprite(assets, 22, 0, 16, 16), new Sprite(assets, 22, 16, 16, 16)],
      [new Sprite(assets, 38, 0, 24, 16), new Sprite(assets, 38, 16, 24, 16)],
    ];

    onPreloadComplete();
  });
  assets.src = assetPath;
}
export function init(canvas) {
  //Adjust alien formation
  const alienPattern = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  ];

  // Initialize the alien positions
  const rows = alienPattern.length;
  const cols = alienPattern[0].length;
  const spacing = 40;
  const startX = 30;
  const startY = 30;

  gameState.aliens = []; // Clear previous aliens

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (alienPattern[row][col] === 1) {
        const alienType = (row + col) % 3; // Adjust as needed
        const alienX = startX + col * spacing;
        const alienY = startY + row * spacing;
        gameState.aliens.push(
          new Alien(alienX, alienY, sprites.aliens[alienType])
        );
      }
    }
  }

  gameState.cannon = new Cannon(100, canvas.height - 100, sprites.cannon);
  gameState.bunkers = [
    new Bunker(50, canvas.height - 150, sprites.bunker),
    new Bunker(150, canvas.height - 150, sprites.bunker),
    new Bunker(250, canvas.height - 150, sprites.bunker),
    new Bunker(350, canvas.height - 150, sprites.bunker),
    new Bunker(450, canvas.height - 150, sprites.bunker),
    new Bunker(550, canvas.height - 150, sprites.bunker),
  ];
}

export function update(time, stopGame, canvas) {
  // Cannon move
  if (gameState.gameOver) {
    gameState.rageMode = false;
    return; // Skip update if game is over
  }

  let moveX = 0;
  let isPushingBorder = false;

  if (inputHandler.isDown("ArrowLeft")) {
    if (gameState.cannon.x + moveX <= 0) {
      isPushingBorder = true;
    } else {
      moveX -= 4;
    }
  }

  if (inputHandler.isDown("ArrowRight")) {
    if (gameState.cannon.x + moveX >= canvas.width - 10) {
      isPushingBorder = true;
    } else {
      moveX += 4;
    }
  }

  // If pushing against the border, activate loading bar
  if (isPushingBorder) {
    if (!gameState.loadingBarActive) {
      gameState.loadingBarActive = true;
      gameState.loadingBarStartTime = performance.now();
    }
  } else {
    // Reset loading bar if not pushing the border
    if (gameState.loadingBarActive) {
      gameState.loadingBarActive = false;
    }
  }

  if (!isPushingBorder || gameState.loadingBarActive) {
    gameState.cannon.x += moveX;
  }

  // Handle loading bar completion and reset cannon position
  if (gameState.loadingBarActive) {
    const elapsedTime = performance.now() - gameState.loadingBarStartTime;
    if (elapsedTime >= gameState.loadingBarDuration) {
      gameState.loadingBarActive = false;
      resetCannonPosition(gameState, canvas); // Move cannon to the other side
    }
  }
  //end cannon move

  //check for alien bullets
  gameState.bullets.forEach((b) => b.update(time));
  detectAlienBulletCollision(gameState.cannon, gameState);

  //end check for alien bullets

  // Shoot bullet from cannon
  if (inputHandler.isPressed("Space")) {
    const bulletX = gameState.cannon.x + 10;
    const bulletY = gameState.cannon.y;
    gameState.bullets.push(new Bullet(bulletX, bulletY, -6, 4, 6, "#fff"));
  }

  if (
    gameState.cannon.x + moveX < 0 ||
    gameState.cannon.x + moveX > canvas.width
  ) {
    if (!gameState.loadingBarActive) {
      gameState.loadingBarActive = true;
      gameState.loadingBarStartTime = performance.now();
    }
  } else {
    gameState.cannon.x += moveX;
  }

  // Update bullets
  gameState.bullets.forEach((b) => b.update(time));

  // Handle collisions and alien destruction
  gameState.bullets = gameState.bullets.filter((b) => {
    if (b.destroyed || b.y < 0 || b.y > canvas.height) return false;

    let hit = false;
    if (b.parentType === "alien") {
      gameState.bunkers.forEach((bunker) => {
        if (isBulletIntersects(b, bunker)) {
          bunker.hits--;
          if (bunker.hits <= 0) bunker.destroyed = true;
          b.destroyed = true;
          hit = true;

          gameState.bunkers = gameState.bunkers.filter(
            (bunker) => !bunker.destroyed
          );
        }
      });
    } else {
      gameState.aliens.forEach((alien) => {
        if (isBulletIntersects(b, alien)) {
          alien.hits--;
          if (alien.hits <= 0) {
            alien.destroyed = true;
            gameState.killStreak++;
            checkForRageMode(gameState);
            increaseScore(gameState);
          }
          b.destroyed = true;
          hit = true;
        }
      });
      gameState.bunkers.forEach((bunker) => {
        if (isBulletIntersects(b, bunker)) {
          b.destroyed = true;
          hit = true;
        }
      });
    }
    return !hit;
  });

  //Alien movements
  if (time - gameState.lastAlienMoveTime >= gameState.alienMoveInterval) {
    let atBorder = gameState.aliens.some((alien) => {
      return gameState.alienMoveDirection === 1
        ? alien.right > canvas.width - 40
        : alien.left < 40;
    });
    gameState.aliens.forEach((alien) => {
      if (!atBorder) {
        alien.x += gameState.alienMoveDirection * gameState.alienMoveDistance;
      }
    });

    if (atBorder) {
      gameState.aliens.forEach((alien) => {
        alien.y += gameState.alienMoveDownDistance;
      });

      gameState.alienMoveDirection *= -1;
    }

    gameState.lastAlienMoveTime = time;
  }

  //alien movements end

  // Update each alien: check if they can shoot and update their state
  gameState.aliens.forEach((alien) => {
    alien.update(time, gameState.cannon.x, gameState); // Pass gameState to check shooting logic
  });

  //Rage mode
  if (
    gameState.rageMode &&
    time - gameState.rageModeStartTime > gameState.rageModeDuration
  ) {
    gameState.rageMode = false;

    // Reset aliens to their normal shooting cooldowns and bullet speeds
    gameState.aliens.forEach((alien) => {
      alien.shootCooldown = Math.random() * 5000 + 3000; // Return to normal shoot cooldown
    });
  }

  const rageModeElement = document.getElementById("rage-mode");
  if (gameState.rageMode) {
    rageModeElement.style.display = "block"; // Show rage mode text
  } else {
    rageModeElement.style.display = "none"; // Hide rage mode text
  }

  //rage mode end

  // Clean up bullets that go off-screen and destroyed aliens
  gameState.bullets = gameState.bullets.filter(
    (b) => !b.destroyed && b.y >= 0 && b.y <= canvas.height
  );
  gameState.aliens = gameState.aliens.filter((a) => !a.destroyed);
}

export function draw(canvas, time) {
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw canvas borders
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Draw game elements
  gameState.aliens.forEach((a) => a.draw(ctx, time));
  gameState.cannon.draw(ctx);
  gameState.bullets.forEach((b) => b.draw(ctx));
  gameState.bunkers.forEach((b) => b.draw(ctx, time));

  if (gameState.loadingBarActive) {
    drawLoadingBar(gameState, ctx, canvas);
  }

  // Interface
  drawCannonLifes(ctx, canvas, sprites.cannon, gameState.lifes);
  if (gameState.gameOver) {
    drawGameLoss(ctx, canvas);
    document.getElementById("rage-mode").style.display = "none"; // Hide rage mode text
    showRestartButton();
  } else if (gameState.aliens.length === 0) {
    drawGameWinning(ctx, canvas);
    document.getElementById("rage-mode").style.display = "none"; // Hide rage mode text
    showNextLevelButton();
  }
}

document
  .getElementById("next-level-button")
  .addEventListener("click", function () {
    nextLevel();
  });

document
  .getElementById("restart-level-button")
  .addEventListener("click", function () {
    restart();
  });

function restart() {
  const canvas = document.getElementById("cnvs");
  gameState.bullets = [];
  gameState.aliens = [];

  // Rage mode
  gameState.killStreak = 0;
  gameState.rageMode = false;
  gameState.rageModeStartTime = 0;

  // Borders move
  gameState.loadingBarActive = false;
  gameState.loadingBarStartTime = 0;
  gameState.loadingBarHeight = 10;

  // Alien movements
  gameState.alienMoveDirection = 1;
  gameState.lastAlienMoveTime = 0;
  gameState.alienMoveInterval = 1500; // 1.5 seconds
  gameState.alienMoveDistance = 30;
  gameState.alienMoveDownDistance = 30;

  // Game over
  gameState.lifes = 3;
  gameState.gameOver = false;

  // Levels
  gameState.score = 0;
  gameState.level = 1;
  gameState.nextLifeScore = 10000;

  gameState.bunkers = [
    new Bunker(50, canvas.height - 150, sprites.bunker),
    new Bunker(150, canvas.height - 150, sprites.bunker),
    new Bunker(250, canvas.height - 150, sprites.bunker),
    new Bunker(350, canvas.height - 150, sprites.bunker),
    new Bunker(450, canvas.height - 150, sprites.bunker),
    new Bunker(550, canvas.height - 150, sprites.bunker),
  ];

  const alienPattern = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  ];

  // Initialize the alien positions
  const rows = alienPattern.length;
  const cols = alienPattern[0].length;
  const spacing = 40;
  const startX = 30;
  const startY = 30;

  gameState.aliens = []; // Clear previous aliens

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (alienPattern[row][col] === 1) {
        const alienType = (row + col) % 3; // Adjust as needed
        const alienX = startX + col * spacing;
        const alienY = startY + row * spacing;
        gameState.aliens.push(
          new Alien(alienX, alienY, sprites.aliens[alienType])
        );
      }
    }
  }
  hideRestartButton();
}

function nextLevel() {
  const canvas = document.getElementById("cnvs");
  gameState.bullets = [];
  gameState.aliens = [];

  gameState.killStreak = 0;
  gameState.rageMode = false;
  gameState.rageModeStartTime = 0;

  gameState.loadingBarActive = false;

  gameState.alienMoveDirection = 1;
  gameState.lastAlienMoveTime = 0;
  gameState.alienMoveInterval = 1500; // 1.5 seconds

  gameState.gameOver = false;

  gameState.level += 1;
  increaseScore(gameState, true);
  gameState.bunkers = [
    new Bunker(50, canvas.height - 150, sprites.bunker),
    new Bunker(150, canvas.height - 150, sprites.bunker),
    new Bunker(250, canvas.height - 150, sprites.bunker),
    new Bunker(350, canvas.height - 150, sprites.bunker),
    new Bunker(450, canvas.height - 150, sprites.bunker),
    new Bunker(550, canvas.height - 150, sprites.bunker),
  ];
  const alienPattern = generateRandomMatrix(5, 10);

  // Initialize the alien positions
  const rows = alienPattern.length;
  const cols = alienPattern[0].length;
  const spacing = 40;
  const startX = 30;
  const startY = 30;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (alienPattern[row][col] === 1) {
        const alienType = (row + col) % 3; // Adjust as needed
        const alienX = startX + col * spacing;
        const alienY = startY + row * spacing;
        gameState.aliens.push(
          new Alien(alienX, alienY, sprites.aliens[alienType])
        );
      }
    }
  }
  hideNextLevelButton();
}
