#!/usr/bin/env node

// Validates YAML front matter on every Markdown file in the repository
// against the Startup OS metadata standard (docs/00-foundation/METADATA-STANDARD.md)
// and status standard (docs/00-foundation/STATUS-STANDARD.md).

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

const REQUIRED_FIELDS = [
  'id',
  'title',
  'status',
  'owner',
  'created',
  'updated',
  'version',
  'domain',
  'tags',
  'dependencies',
  'related',
];

// Per docs/00-foundation/STATUS-STANDARD.md. Matched case-insensitively so
// "Active" and "active" are both accepted.
const VALID_STATUSES = ['draft', 'review', 'active', 'deprecated', 'archived'];

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

// Minimal parser for the flat, single-level front matter Startup OS uses:
// scalar values, and flow-style arrays like `tags: [a, b]` or `dependencies: []`.
function parseFrontMatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return null;

  const closingIndex = lines.indexOf('---', 1);
  if (closingIndex === -1) return null;

  const fields = {};
  for (const line of lines.slice(1, closingIndex)) {
    const match = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    fields[key] = rawValue.trim();
  }
  return fields;
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];

  const fields = parseFrontMatter(content);
  if (!fields) {
    errors.push('missing YAML front matter (file must start with a --- block)');
    return errors;
  }

  const missing = REQUIRED_FIELDS.filter((field) => !(field in fields));
  if (missing.length > 0) {
    errors.push(`missing field(s): ${missing.join(', ')}`);
  }

  if ('status' in fields) {
    const status = fields.status.toLowerCase();
    if (!VALID_STATUSES.includes(status)) {
      errors.push(
        `invalid status "${fields.status}" (expected one of: ${VALID_STATUSES.join(', ')})`
      );
    }
  }

  if ('owner' in fields && fields.owner.length === 0) {
    errors.push('owner must not be empty');
  }

  return errors;
}

function main() {
  const files = findMarkdownFiles(REPO_ROOT);
  const failures = [];

  for (const file of files) {
    const errors = validateFile(file);
    if (errors.length > 0) {
      failures.push({ file: path.relative(REPO_ROOT, file), errors });
    }
  }

  console.log('Front Matter Validation');
  console.log('=======================');
  console.log(`Files checked: ${files.length}`);
  console.log(`Files passed:  ${files.length - failures.length}`);
  console.log(`Files failed:  ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailures:');
    for (const { file, errors } of failures) {
      console.log(`\n  ${file}`);
      for (const error of errors) {
        console.log(`    - ${error}`);
      }
    }
    console.log('');
    process.exit(1);
  }

  console.log('\nAll Markdown files have valid front matter.');
  process.exit(0);
}

main();
