// NOTE: This is primarily for getting an opinion off a generative
// algorithm. I removed the font files from the list, but Gemini hallucinated
// A LOT when provided the output file.

const fs = require('fs');
const path = require('path');

// --- Configuration ---
const ROOT_FILES_TO_INCLUDE = [
  'package.json',
  'app.json', // Or 'app.config.js' if you use that
  'eas.json',
  'babel.config.js',
  'tsconfig.json', // If you use TypeScript
  'eslint.config.js',  // If you use ESLint
  'knip.config.js',
  'google-services.json', // For Android Firebase
  'GoogleService-Info.plist', // For iOS Firebase
  'README.md',
  // Add any other crucial root config files here
];

const SOURCE_DIRS_TO_TRAVERSE = [
  'components',
  'constants',
  'hooks',
  'src',
  // Add other directories containing your main source code, e.g., 'components', 'utils', 'hooks', etc.
];

const EXCLUDE_PATTERNS = [
  'node_modules',
  '.git',
  '.expo',
  'build',
  'dist',
  '*.log',
  '*.lock',
  '*.sqlite',
  '*.db',
  '__tests__', // Typically test files are not needed for policy review
  '*.test.js',
  '*.test.ts',
  '*.test.tsx',
  '*.spec.js',
  '*.spec.ts',
  '*.spec.tsx',
  'web', // If you only care about mobile policies, you might exclude web-specific code
  'android', // Native Android projects, if not managed by Expo's autogeneration
  'ios', // Native iOS projects, if not managed by Expo's autogeneration
  // Add any other specific files or directories to exclude
];

const OUTPUT_FILE_NAME = 'concatenated_code_for_analysis.txt';
const ROOT_DIR = process.cwd(); // Get the current working directory (your project root)

// --- Script Logic ---

let concatenatedContent = '';

// Function to add file content to the concatenated string
const addFileContent = (filePath, content) => {
  const relativePath = path.relative(ROOT_DIR, filePath);
  concatenatedContent += `${relativePath}:\n\n`;
  concatenatedContent += content;
  concatenatedContent += `\n\n${'='.repeat(80)}\n\n`; // Separator
};

// 1. Include Root Files
console.log('Including root configuration files...');
for (const fileName of ROOT_FILES_TO_INCLUDE) {
  const filePath = path.join(ROOT_DIR, fileName);
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      addFileContent(filePath, content);
      console.log(`- Added: ${fileName}`);
    } catch (error) {
      console.warn(`- Warning: Could not read ${fileName}: ${error.message}`);
    }
  } else {
    console.log(`- Skipping: ${fileName} (not found)`);
  }
}

// 2. Traverse Source Directories
console.log('\nTraversing source directories...');
const traverseDir = (currentPath) => {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);
    const relativePath = path.relative(ROOT_DIR, fullPath);

    // Check against exclude patterns
    const shouldExclude = EXCLUDE_PATTERNS.some(pattern => {
      if (pattern.startsWith('*')) { // Wildcard for file extension
        return entry.name.endsWith(pattern.substring(1));
      }
      return relativePath.includes(pattern) || entry.name.includes(pattern);
    });

    if (shouldExclude) {
      console.log(`- Excluded: ${relativePath}`);
      continue;
    }

    if (entry.isDirectory()) {
      traverseDir(fullPath); // Recurse into subdirectories
    } else if (entry.isFile()) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        addFileContent(fullPath, content);
        console.log(`- Added: ${relativePath}`);
      } catch (error) {
        console.warn(`- Warning: Could not read ${relativePath}: ${error.message}`);
      }
    }
  }
};

for (const dir of SOURCE_DIRS_TO_TRAVERSE) {
  const dirPath = path.join(ROOT_DIR, dir);
  if (fs.existsSync(dirPath)) {
    traverseDir(dirPath);
  } else {
    console.warn(`- Warning: Source directory "${dir}" not found. Skipping.`);
  }
}

// 3. Write to Output File
fs.writeFileSync(path.join(ROOT_DIR, OUTPUT_FILE_NAME), concatenatedContent, 'utf8');
console.log(`\nConcatenated code written to ${OUTPUT_FILE_NAME}`);
