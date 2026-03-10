const fs = require('fs');
const path = require('path');

const rawArgs = process.argv.slice(2);
const flags = { shuffle: false, full: false, limit: Infinity, clips: 5, minLength: 1.0 };
const positional = [];
for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === '--shuffle') flags.shuffle = true;
  else if (rawArgs[i] === '--full') flags.full = true;
  else if (rawArgs[i] === '--limit') flags.limit = parseInt(rawArgs[++i], 10);
  else if (rawArgs[i] === '--clips') flags.clips = parseInt(rawArgs[++i], 10);
  else if (rawArgs[i] === '--min-length') flags.minLength = parseFloat(rawArgs[++i]);
  else positional.push(rawArgs[i]);
}
const inputPath = positional[0] || 'video_files.json';
const outputPath = positional[1] || inputPath.replace(/\.json$/i, '.edl');

function randomClips(duration, n, minLength) {
  const clips = [];
  for (let i = 0; i < n; i++) {
    const start = Math.random() * (duration - minLength);
    const end = start + minLength + Math.random() * (duration - start - minLength);
    clips.push({
      start: parseFloat(start.toFixed(2)),
      end: parseFloat(Math.min(end, duration).toFixed(2)),
    });
  }
  return clips;
}

const allEntries = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

if (flags.shuffle) {
  for (let i = allEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allEntries[i], allEntries[j]] = [allEntries[j], allEntries[i]];
  }
}

const entries = allEntries.slice(0, flags.limit);

const segments = [];
for (const entry of entries) {
  if (flags.full) {
    segments.push(`${entry.file},0,${entry.duration}`);
  } else {
    const clips = randomClips(entry.duration, flags.clips, flags.minLength);
    for (const clip of clips) {
      const length = parseFloat((clip.end - clip.start).toFixed(6));
      segments.push(`${entry.file},${clip.start},${length}`);
    }
  }
}

const lines = ['# mpv EDL v0', ...segments];

fs.writeFileSync(outputPath, lines.join('\n') + '\n');
console.log(`Wrote ${lines.length - 1} segment(s) to ${outputPath}`);
