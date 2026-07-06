#!/usr/bin/env node

// Validates that every relative Markdown link in the repository resolves to
// an existing file, per docs/00-foundation/CROSS-LINKING-STANDARD.md.
// Does not check external (http/https) links or mailto links.

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  'coverage',
  'vendor',
]);

const LINK_PATTERN = /\]\(([^)]+)\)/g;

function findMarkdownFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      findMarkdownFiles(path.join(dir, entry.name), results);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

// Strip fenced code blocks and inline code spans before extracting links, so
// a markdown-syntax example like `[text](path)` shown as documentation isn't
// mistaken for a real link.
function stripCode(content) {
  return content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '');
}

function extractLinks(content) {
  const links = [];
  let match;
  const stripped = stripCode(content);
  while ((match = LINK_PATTERN.exec(stripped)) !== null) {
    links.push(match[1].trim());
  }
  return links;
}

function isExternal(link) {
  return /^(https?:|mailto:)/i.test(link);
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const dir = path.dirname(filePath);
  const broken = [];

  for (const link of extractLinks(content)) {
    if (isExternal(link)) continue;

    const [linkPath] = link.split('#');
    if (!linkPath) continue; // pure in-file anchor, e.g. "#section"

    const target = path.resolve(dir, linkPath);
    if (!fs.existsSync(target)) {
      broken.push(link);
    }
  }

  return broken;
}

function main() {
  const files = findMarkdownFiles(REPO_ROOT);
  const failures = [];

  for (const file of files) {
    const broken = validateFile(file);
    if (broken.length > 0) {
      failures.push({ file: path.relative(REPO_ROOT, file), broken });
    }
  }

  console.log('Link Validation');
  console.log('===============');
  console.log(`Files checked: ${files.length}`);
  console.log(`Files passed:  ${files.length - failures.length}`);
  console.log(`Files failed:  ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nBroken links:');
    for (const { file, broken } of failures) {
      console.log(`\n  ${file}`);
      for (const link of broken) {
        console.log(`    - ${link}`);
      }
    }
    console.log('');
    process.exit(1);
  }

  console.log('\nAll relative links resolve.');
  process.exit(0);
}

main();
