#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const featureName = process.argv[2];

if (!featureName) {
  console.error('Please provide feature name');
  process.exit(1);
}

const basePath = path.join(__dirname, '../src/features', featureName);

const folders = [
  'components',
  'hooks',
  'navigation',
  'screens',
  'services',
  'store',
  'types',
  'utils',
];

const files = {
  'components/index.ts': ``,
  'hooks/index.ts': ``,
  'navigation/index.ts': ``,
  'screens/index.ts': ``,
  'services/index.ts': ``,
  'store/index.ts': ``,
  'types/index.ts': ``,
  'utils/index.ts': ``,
  'index.ts': ``,
};

if (fs.existsSync(basePath)) {
  console.error('Feature already exists');
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

console.log(`Feature "${featureName}" created successfully.`);
