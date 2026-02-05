import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const images = [
    'tshirt.png'
];

async function convert() {
    for (const img of images) {
        const input = path.join(rootDir, 'public', 'assets', 'images', 'products', img);
        const output = input.replace('.png', '.webp');
        try {
            const info = await sharp(input).webp({ quality: 80 }).toFile(output);
            console.log(`Converted ${img}: ${info.size} bytes`);
        } catch (e) {
            console.error(`Error converting ${img}:`, e);
        }
    }
}

convert();
