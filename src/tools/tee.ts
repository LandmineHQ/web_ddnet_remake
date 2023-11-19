// Prime 2015-31
// Updated to be more realistic by Ryozuki on 2022-03-28.
// Add svg render and more feature by Landmine地雷 on 2023-11-18

function RenderSkin(skin: HTMLImageElement, width: number, height: number) {
    // @ts-ignore 
    // create canvas
    const canvas: HTMLCanvasElement = this;

    // scale
    const s = skin.naturalWidth / 256

    canvas.width = width * s;
    canvas.height = height * s;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    ctx.drawImage(skin, 192 * s, 64 * s, 64 * s, 32 * s, 8 * s, 32 * s, 64 * s, 30 * s) //back feet shadow
    ctx.drawImage(skin, 96 * s, 0 * s, 96 * s, 96 * s, 16 * s, 0 * s, 64 * s, 64 * s) //body shadow
    ctx.drawImage(skin, 192 * s, 64 * s, 64 * s, 32 * s, 24 * s, 32 * s, 64 * s, 30 * s) //front feet shadow
    ctx.drawImage(skin, 192 * s, 32 * s, 64 * s, 32 * s, 8 * s, 32 * s, 64 * s, 30 * s) //back feet
    ctx.drawImage(skin, 0 * s, 0 * s, 96 * s, 96 * s, 16 * s, 0 * s, 64 * s, 64 * s) //body
    ctx.drawImage(skin, 192 * s, 32 * s, 64 * s, 32 * s, 24 * s, 32 * s, 64 * s, 30 * s) //front feet
    ctx.drawImage(skin, 64 * s, 96 * s, 32 * s, 32 * s, 39 * s, 18 * s, 26 * s, 26 * s) //left eye

    //right eye (flip and draw)
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(skin, 64 * s, 96 * s, 32 * s, 32 * s, -73 * s, 18 * s, 26 * s, 26 * s)
    ctx.restore();
}

function OnTeeSkinRender(SkinCanvas: HTMLCanvasElement, SkinImg: HTMLImageElement, width: number, height: number) {
    RenderSkin.call(SkinCanvas, SkinImg, width, height);
}

function OnSVGRender(skinCanvas: HTMLCanvasElement, skinImg: HTMLImageElement, width: number, height: number) {
    const ctx = skinCanvas.getContext('2d') as CanvasRenderingContext2D
    skinCanvas.width = 300;
    skinCanvas.height = 150;

    const x = skinCanvas.width / 2 - width / 2
    const y = skinCanvas.height / 2 - height / 2

    ctx.save()
    ctx.drawImage(skinImg, 0, 0, width, height, x, y, width, height)
    ctx.restore()
}

export { OnTeeSkinRender, OnSVGRender }