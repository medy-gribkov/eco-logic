import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Map source files (in root) to target files (in assets/decor)
const conversions = [
    {
        // "image_no_background.png" -> "vine-drape"
        srcPattern: /image_no_background\.png/i,
        targetName: 'vine-drape'
    },
    {
        // "ChatGPT Image 5 февр. 2026 г., 11_09_58.png" -> "vine-corner"
        // We'll match loosely on "ChatGPT" to avoid encoding issues
        srcPattern: /ChatGPT.*\.png/i,
        targetName: 'vine-corner'
    }
];

const targetDir = path.join(rootDir, 'public/assets/decor');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
    console.log("Processing Vines...");
    const files = fs.readdirSync(rootDir);

    for (const mapping of conversions) {
        const file = files.find(f => f.match(mapping.srcPattern));
        if (file) {
            const sourcePath = path.join(rootDir, file);
            const targetWebP = path.join(targetDir, `${mapping.targetName}.webp`);
            const targetPng = path.join(targetDir, `${mapping.targetName}.png`); // Keep PNG just in case

            console.log(`Found: ${file} -> ${mapping.targetName}`);

            // 1. Move/Copy PNG
            fs.copyFileSync(sourcePath, targetPng);

            // 2. Convert to WebP
            try {
                await sharp(sourcePath)
                    .webp({ quality: 90 }) // Higher quality for transparent decor
                    .resize({ width: 1000, withoutEnlargement: true }) // Cap size widely
                    .toFile(targetWebP);
                console.log(`Converted to WebP: ${path.basename(targetWebP)}`);

                // Cleanup source
                fs.unlinkSync(sourcePath);
                console.log(`Deleted source: ${file}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        } else {
            console.warn(`Could not find file matching: ${mapping.srcPattern}`);
        }
    }
}

run();
