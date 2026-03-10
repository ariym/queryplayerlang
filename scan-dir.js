const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videoExtensions = ['.mp4', '.mkv', '.mov', '.webm', '.avi', '.flv', '.mpg', '.mpeg'];

function getVideoFiles(directory) {
  return fs.readdirSync(directory).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return videoExtensions.includes(ext);
  });
}

function getVideoDuration(filePath) {
  try {
    const cmd = `ffprobe -v error -show_entries format=duration -of csv=p=0 "${filePath}"`;
    const output = execSync(cmd).toString().trim();
    return parseFloat(output);
  } catch (err) {
    console.error(`Error getting duration for ${filePath}:`, err);
    return null;
  }
}

function scanDir(dir) {
  const videoFiles = getVideoFiles(dir);
  const results = [];
  for (const file of videoFiles) {
    const filePath = path.join(dir, file);
    const duration = getVideoDuration(filePath);
    if (!duration || isNaN(duration) || duration <= 0) continue;
    results.push({
      file: filePath,
      duration: parseFloat(duration.toFixed(2)),
    });
  }
  return results;
}

const videoDir = process.argv[2] || process.cwd();
const data = scanDir(videoDir);

fs.writeFileSync('video_files.json', JSON.stringify(data, null, 2));
console.log(`Found ${data.length} video(s), saved to video_files.json`);