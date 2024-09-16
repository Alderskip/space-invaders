export function isBulletIntersects(bullet, other) {
  let d1x = bullet.left - other.right;
  let d2x = other.left - bullet.right;

  if (d1x > 0 || d2x > 0) return false;
  if (
    bullet.top - other.bottom > 0 ||
    (other.top - bullet.bottom > -bullet.vy && bullet.vy < 0)
  )
    return false;
  if (
    (other.top - bullet.bottom > 0 || bullet.top - other.bottom > bullet.vy) &&
    bullet.vy > 0
  )
    return false;

  return bullet.vy < 0 ? bullet.top - other.bottom : other.top - bullet.bottom;
}

export function detectAlienBulletCollision(cannon, gameState) {
  gameState.bullets.forEach((bullet) => {
    if (bullet.parentType === "alien" && !bullet.destroyed) {
      if (
        bullet.x < cannon.x + cannon._sprite.w &&
        bullet.x + bullet.w > cannon.x &&
        bullet.y < cannon.y + cannon._sprite.h &&
        bullet.y + bullet.h > cannon.y
      ) {
        bullet.destroyed = true;
        gameState.lifes -= 1;
      }
    }
  });

  if (gameState.lifes <= 0) {
    gameState.gameOver = true;
  }
}

export function isBlocked(self, other) {
  let d1x = self.left - other.right;
  let d2x = other.left - self.right;

  if (d1x > 0 || d2x > 0 || self.top - other.bottom > 0) return false;

  return true;
}
