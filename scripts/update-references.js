import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

const skipDirs = [
    path.join(srcDir, 'pdf') // Skip PDF templates as they may need PNGs
];

function shouldSkip(filePath) {
    return skipDirs.some(dir => filePath.startsWith(dir));
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

function updateReferences() {
    const files = getAllFiles(srcDir);
    const targetFiles = files.filter(file =>
        /\.(js|jsx|css|json)$/i.test(file) &&
        !shouldSkip(file)
    );

    let changedFiles = 0;

    targetFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        // Replace asset paths
        // This regex looks for /assets/... .png/.jpg/.jpeg
        // It handles both absolute strings '/assets/...' and relative imports
        // Strategies:
        // 1. '/assets/...' -> .webp
        // 2. '../../assets/...' -> .webp

        // We will be a bit aggressive but scoped to common image extensions
        // explicitly checking for common asset patterns or just extensions

        // Replace .png -> .webp
        content = content.replace(/(\/assets\/.*?)(\.png|\.jpg|\.jpeg)/gi, '$1.webp');

        // Replace imports in JS/JSX often look like: from '../../assets/logo.png'
        content = content.replace(/(\.{1,2}\/assets\/.*?)(\.png|\.jpg|\.jpeg)/gi, '$1.webp');

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated: ${path.relative(rootDir, file)}`);
            changedFiles++;
        }
    });

    console.log(`\nUpdated references in ${changedFiles} files.`);
}

updateReferences();
