export default class Cannon {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this._sprite = sprite;
    this.destroyed = false;
    this.type = "cannon";
    this.reloading = 0.0;
    this.reloadingTime = 1000;
  }

  draw(ctx, time) {
    ctx.drawImage(
      this._sprite.img,
      this._sprite.x,
      this._sprite.y,
      this._sprite.w,
      this._sprite.h,
      this.x,
      this.y,
      this._sprite.w,
      this._sprite.h
    );
  }
}
