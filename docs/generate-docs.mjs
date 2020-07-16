import shell from 'shelljs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export function getDirName(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}

const docDir = getDirName(import.meta.url);
const utilsScript = path.resolve(docDir, 'generate-utils.mjs');
const utilsDoc = path.resolve(docDir, 'utils.md');

if (shell.exec(`node ${utilsScript}`).code !== 0) shell.exit(1);

shell.exec(`git add ${utilsDoc}`);
