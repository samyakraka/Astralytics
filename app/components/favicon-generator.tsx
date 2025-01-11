import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

async function generateFavicons() {
  const svgBuffer = await fs.readFile(path.join(process.cwd(), 'public', 'favicon.svg'))

  // Generate favicon.ico (16x16, 32x32, 48x48)
  await sharp(svgBuffer)
    .resize(48, 48)
    .toFormat('ico', { sizes: [16, 32, 48] })
    .toFile(path.join(process.cwd(), 'public', 'favicon.ico'))

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .toFormat('png')
    .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'))

  console.log('Favicons generated successfully!')
}

generateFavicons().catch(console.error)

