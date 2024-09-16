export function drawCannonLifes(ctx, canvas, sprite, lifes) {
    ctx.font = "18px MinecraftRusNEW";
    ctx.fillStyle = "#8EFA00";
    ctx.fillText(lifes, 10, canvas.clientHeight - 10);

    for (let i = 0; i < lifes; i++)
        ctx.drawImage(
            sprite.img,
            sprite.x, sprite.y, sprite.w, sprite.h,
            30 + (sprite.w + 10) * i, canvas.clientHeight - 24, sprite.w, sprite.h
        );
}

export function drawGameLoss (ctx, canvas,) {
    ctx.font = "32px MinecraftRusNEW";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("WASTED", canvas.clientWidth/2, canvas.clientHeight/2);
}

export function drawGameWinning (ctx, canvas,) {
    ctx.font = "32px MinecraftRusNEW";
    ctx.fillStyle = "#8EFA00";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Mission Accomplished, Viking", canvas.clientWidth/2, canvas.clientHeight/2);
}