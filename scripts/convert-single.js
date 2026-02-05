import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputFile = path.join(rootDir, 'public', 'assets', 'images', 'products', 'coffee-cup.png');
const outputFile = path.join(rootDir, 'public', 'assets', 'images', 'products', 'coffee-cup.webp');

sharp(inputFile)
    .webp({ quality: 80 })
    .toFile(outputFile)
    .then(info => {
        console.log(`Converted coffee-cup.png to WebP: ${info.size} bytes`);
    })
    .catch(err => {
        console.error("Error converting file:", err);
    });
