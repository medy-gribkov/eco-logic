import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Source Directories (The new folders)
const newIconsDir = path.join(rootDir, 'icons-20260205T085341Z-1-001/icons');
const newPersonasDir = path.join(rootDir, 'personas-20260205T085411Z-1-001/personas');

// Target Directories (The existing folders)
const targetIconsDir = path.join(rootDir, 'public/assets/icons');
const targetPersonasDir = path.join(rootDir, 'public/assets/personas');

// Ensure sharp is available
if (!sharp) {
    console.error('Sharp is not installed. Please run npm install sharp');
    process.exit(1);
}

async function processDirectory(sourceDir, targetDir) {
    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory not found: ${sourceDir}`);
        return;
    }

    const files = fs.readdirSync(sourceDir);
    console.log(`Processing ${files.length} files from ${sourceDir}...`);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);
            const targetWebP = path.join(targetDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

            // 1. Copy/Overwrite Original (Optional, but good for backup/source reference)
            // We actually want to replace, so we copy over.
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`Moved: ${file}`);

            // 2. Convert to WebP
            try {
                await sharp(sourcePath)
                    .webp({ quality: 85 })
                    .toFile(targetWebP);
                console.log(`Converted to WebP: ${path.basename(targetWebP)}`);

                // 3. Clean up the source PNG in the target (we only want WebP in production ideally, but user asked to "place properly")
                // User said "move... delete old files". I will keep the new PNGs alongside WebP just in case, or delete if I want to be strict.
                // Strict WebP: Let's delete the copied PNG from target to keep it clean.
                fs.unlinkSync(targetPath);

            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

async function run() {
    console.log("Starting Asset Replacement...");

    // Process Icons
    console.log("\n--- Icons ---");
    await processDirectory(newIconsDir, targetIconsDir);

    // Process Personas
    console.log("\n--- Personas ---");
    await processDirectory(newPersonasDir, targetPersonasDir);

    console.log("\nAsset Replacement Complete!");
}

run();
