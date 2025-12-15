const sharp = require('sharp')
const fs = require('fs').promises
const path = require('path')

async function convertImages() {
  const inputDir = path.join(__dirname, '..', 'images-initial')
  const outputDir = path.join(__dirname, '..', 'images')

  // Создаем выходную папку
  await fs.mkdir(outputDir, { recursive: true })

  // Читаем файлы из input
  const files = await fs.readdir(inputDir)

  let processedCount = 0
  let skippedCount = 0

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) continue

    const inputPath = path.join(inputDir, file)
    const name = path.parse(file).name

    // Пути выходных файлов
    const originalPath = path.join(outputDir, `${name}${ext}`)
    const webpPath = path.join(outputDir, `${name}.webp`)
    const avifPath = path.join(outputDir, `${name}.avif`)

    // Проверяем, все ли 3 версии уже существуют
    const exists = await Promise.all([
      fs
        .access(originalPath)
        .then(() => true)
        .catch(() => false),
      fs
        .access(webpPath)
        .then(() => true)
        .catch(() => false),
      fs
        .access(avifPath)
        .then(() => true)
        .catch(() => false),
    ])

    if (exists.every(Boolean)) {
      console.log(`Пропущено (уже существует): ${file}`)
      skippedCount++
      continue
    }

    // 1. Оптимизированный исходный формат
    const image = sharp(inputPath)

    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({
          quality: 80,
          progressive: true,
          mozjpeg: true,
        })
        .toFile(originalPath)
    } else if (ext === '.png') {
      await image
        .png({
          quality: 80,
          progressive: true,
          compressionLevel: 6,
        })
        .toFile(originalPath)
    } else {
      // для gif и прочего можно просто сохранить как jpeg
      await image
        .jpeg({
          quality: 80,
          progressive: true,
          mozjpeg: true,
        })
        .toFile(originalPath)
    }

    // 2. WebP
    await sharp(inputPath).webp({ quality: 80, effort: 4 }).toFile(webpPath)

    // 3. AVIF
    await sharp(inputPath).avif({ quality: 65, effort: 4 }).toFile(avifPath)

    console.log(`✅ Обработано: ${file} → ${name} (оригинал + webp + avif)`)
    processedCount++
  }

  console.log(
    `\n🎉 Завершено! Обработано: ${processedCount}, Пропущено: ${skippedCount}`,
  )
}

convertImages().catch(console.error)
