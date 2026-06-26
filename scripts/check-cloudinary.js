const fs = require('node:fs');
const path = require('node:path');
const { v2: cloudinary } = require('cloudinary');

function loadDotEnvLocal() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const index = trimmed.indexOf('=');
    if (index === -1) continue;

    const key = trimmed.slice(0, index).trim();
    const rawValue = trimmed.slice(index + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, '');

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function maskApiKey(apiKey) {
  if (!apiKey) return '';
  if (apiKey.length <= 4) return '****';
  return `${apiKey.slice(0, 4)}****${apiKey.slice(-2)}`;
}

async function main() {
  loadDotEnvLocal();

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error(
      'CLOUDINARY CONNECTION ERROR: configure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY e CLOUDINARY_API_SECRET.'
    );
    process.exit(1);
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  try {
    await cloudinary.api.ping();
    console.log(`CLOUDINARY CONNECTION OK (${cloudName}, key ${maskApiKey(apiKey)})`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`CLOUDINARY CONNECTION ERROR: ${message}`);
    process.exit(1);
  }
}

main();
