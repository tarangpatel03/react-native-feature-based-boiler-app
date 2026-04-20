#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const featureName = process.argv[2];

if (!featureName) {
  console.error('Please provide feature name');
  process.exit(1);
}

const basePath = path.join(__dirname, '../src/entities', featureName);

const folders = ['hooks', 'services', 'store', 'types'];

const files = {
  'hooks/index.ts': ``,
  'services/index.ts': ``,
  'store/index.ts': ``,
  'types/index.ts': ``,
  'index.ts': ``,
};

if (fs.existsSync(basePath)) {
  console.error('Entity already exists');
  process.exit(1);
}

// Create folders
folders.forEach((folder) => {
  fs.mkdirSync(path.join(basePath, folder), { recursive: true });
});

// Create files
Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(basePath, file), content);
});

console.log(`Entity "${featureName}" created successfully.`);
