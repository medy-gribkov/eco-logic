import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'public', 'assets');

// Recursive function to get all files
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

async function convertImages() {
    const files = getAllFiles(assetsDir);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to optimize.`);

    let savedBytes = 0;

    for (const file of imageFiles) {
        const parsedPath = path.parse(file);
        const targetPath = path.join(parsedPath.dir, parsedPath.name + '.webp');

        try {
            const originalStats = fs.statSync(file);

            // If WebP already exists and is newer, skip
            if (fs.existsSync(targetPath)) {
                const targetStats = fs.statSync(targetPath);
                if (targetStats.mtime > originalStats.mtime) {
                    //   console.log(`Skipping ${parsedPath.base} (WebP exists)`);
                    continue;
                }
            }

            await sharp(file)
                .webp({ quality: 80 }) // 80 is a good balance
                .toFile(targetPath);

            const newStats = fs.statSync(targetPath);
            const savings = originalStats.size - newStats.size;
            savedBytes += savings;

            console.log(`Converted: ${parsedPath.base} -> .webp (${(newStats.size / 1024).toFixed(1)}KB, saved ${(savings / 1024).toFixed(1)}KB)`);

        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }

    console.log(`\nOptimization Complete! Total saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

convertImages();
