import { canAlienShoot, shootAlienBullet } from "./utils/helpers";

export default class Alien {
  constructor(x, y, [spriteA, spriteB], hits = 1) {
    this.x = x;
    this.y = y;
    this._spriteA = spriteA;
    this._spriteB = spriteB;
    this.type = "alien";
    this.hits = hits;
    this.shootCooldown = Math.random() * 5000 + 3000; // Randomized cooldown between shots
    this.lastShotTime = 0; // Tracks the last shot time
    this.destroyed = false;
  }

  draw(ctx, time) {
    let sp = Math.ceil(time / 1000) % 2 === 0 ? this._spriteA : this._spriteB;
    ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, this.x, this.y, sp.w, sp.h);
  }

  // Update method: Checks if it's time for the alien to shoot
  update(time, cannonX, gameState) {
    if (
      time - this.lastShotTime > this.shootCooldown && // Check if cooldown has passed
      canAlienShoot(this, gameState) // Check if this alien is allowed to shoot
    ) {
      shootAlienBullet(this, cannonX, gameState); // Shoot towards cannon
      this.lastShotTime = time; // Reset the shot cooldown
    }
  }

  get left() {
    return this.x;
  }
  get right() {
    return this.x + this._spriteA.w;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this._spriteA.h;
  }
}
