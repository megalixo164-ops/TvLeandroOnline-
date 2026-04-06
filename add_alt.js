const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find all <img ... /> tags
const imgRegex = /<img\s+([^>]+)>/g;

content = content.replace(imgRegex, (match, p1) => {
  if (!p1.includes('alt=')) {
    return `<img ${p1} alt="" >`;
  }
  return match;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added alt attributes to images.');
