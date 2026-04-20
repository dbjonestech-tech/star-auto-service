const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#1B3A5C"/>
  <path d="M256 32l65.5 132.6L468 185.9l-106 103.3L387.2 436 256 366.3 124.8 436l25.2-146.8L44 185.9l146.5-21.3Z" fill="#E8792B"/>
</svg>`;

const publicDir = path.join(__dirname, "..", "public");

async function run() {
  const svgBuffer = Buffer.from(svg);

  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, "icon-192.png"));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, "icon-512.png"));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));

  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico32);

  console.log("Generated favicons in public/");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
