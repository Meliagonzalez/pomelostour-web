// Genera versiones optimizadas en WebP (y el og-image en JPG) de las imágenes
// que están efectivamente importadas en los componentes. Correr con:
//   node scripts/optimize-images.js

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC_DIR = path.join(root, "src/assets/images/Todas");
const OUT_DIR = path.join(root, "src/assets/images/optimized");
const PUBLIC_DIR = path.join(root, "public");
const LOGO_SOURCE = path.join(__dirname, "logo-source.png");

async function toWebp(inputFile, outputFile, { width, quality }) {
  await sharp(path.join(SRC_DIR, inputFile))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(path.join(OUT_DIR, outputFile));
  console.log(`  ${inputFile} -> optimized/${outputFile} (w<=${width}, q${quality})`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log("Hero (DJI_0053.jpg)");
  await toWebp("DJI_0053.jpg", "hero-desktop.webp", { width: 1920, quality: 85 });
  await toWebp("DJI_0053.jpg", "hero-mobile.webp", { width: 768, quality: 80 });
  await sharp(path.join(SRC_DIR, "DJI_0053.jpg"))
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toFile(path.join(OUT_DIR, "hero-fallback.jpg"));
  console.log("  DJI_0053.jpg -> optimized/hero-fallback.jpg (fallback <picture>, w<=1920, q82)");

  console.log("River (DJI_0018.jpg)");
  await toWebp("DJI_0018.jpg", "river.webp", { width: 1920, quality: 82 });

  console.log("Gallery (9 fotos)");
  const galleryPhotos = [
    ["rafting-rapido.jpeg", "rafting-rapido.webp"],
    ["ola-balsa-4.jpeg", "ola-balsa-4.webp"],
    ["DJI_0026.jpg", "dji-0026.webp"],
    ["famil.jpeg", "famil.webp"],
    ["Salto balsa.jpeg", "salto-balsa.webp"],
    ["remos-arriba.jpeg", "remos-arriba.webp"],
    ["plantel-river-rafting.jpeg", "plantel-river-rafting.webp"],
    ["deck-rafting.jpeg", "deck-rafting.webp"],
    ["martin-pescador.jpeg", "martin-pescador.webp"],
  ];
  for (const [input, output] of galleryPhotos) {
    await toWebp(input, output, { width: 1920, quality: 82 });
  }

  console.log("Logo (src/assets/logo.png)");
  await mkdir(path.join(root, "src/assets"), { recursive: true });
  await sharp(path.join(root, "src/assets/logo.png"))
    .resize({ width: 400, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(root, "src/assets/logo-optimized.webp"));
  console.log("  src/assets/logo.png -> src/assets/logo-optimized.webp (w<=400, q90)");

  console.log("Favicon (scripts/logo-source.png -> public/favicon.png, public/apple-touch-icon.png)");
  await sharp(LOGO_SOURCE)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon.png"));
  console.log("  -> public/favicon.png (32x32)");

  await sharp(LOGO_SOURCE)
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"));
  console.log("  -> public/apple-touch-icon.png (180x180)");

  console.log("og-image (public/og-image.jpg)");
  await sharp(path.join(PUBLIC_DIR, "og-image.jpg"))
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 85 })
    .toFile(path.join(PUBLIC_DIR, "og-image-optimized.jpg"));
  console.log("  -> public/og-image-optimized.jpg (1200x630, q85)");

  console.log("\nListo.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
