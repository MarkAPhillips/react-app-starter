import fs from 'fs';

export const loadFile = filePath => JSON.parse(fs.readFileSync(filePath, 'utf8'));
