const fs = require('fs').promises
const path = require('path')
let clipboardy

async function main() {
  // parse args: first non-flag is block name; flags: --paste, -p, --clipboard
  const rawArgs = process.argv.slice(2)
  let name
  let paste = false
  for (const a of rawArgs) {
    if (a === '--paste' || a === '-p' || a === '--clipboard') {
      paste = true
      continue
    }
    if (!a.startsWith('-') && !name) {
      name = a
    }
  }
  if (!name) {
    console.error('Usage: add-block <block-name> [--paste]')
    process.exit(1)
  }

  const blocksDir = path.join(process.cwd(), 'scss', 'blocks')
  const fileName = `_${name}.scss`
  const filePath = path.join(blocksDir, fileName)
  const styleFile = path.join(process.cwd(), 'scss', 'style.scss')
  const useLine = `@use "blocks/${name}";`
  const helperLine = `@use '../helpers' as *;`

  try {
    // read clipboard only if requested
    let clipText = ''
    if (paste) {
      // попытка загрузить clipboardy:
      // 1) пробуем require (clipboardy@2 и CommonJS)
      // 2) если это ESM-only пакет (clipboardy@3+), используем динамический import
      try {
        clipboardy = require('clipboardy')
      } catch (requireErr) {
        try {
          const mod = await import('clipboardy')
          clipboardy = mod && (mod.default || mod)
        } catch (importErr) {
          console.error(
            'Module "clipboardy" not found or could not be imported. Install with: npm install clipboardy@2 --save-dev',
          )
          process.exit(1)
        }
      }

      try {
        if (clipboardy && typeof clipboardy.read === 'function') {
          clipText = await clipboardy.read()
        } else {
          console.warn(
            'clipboardy загружен, но не предоставляет метод read(). Файл создастся с пустым содержимым.',
          )
        }
      } catch (e) {
        console.warn(
          'Не удалось прочитать буфер обмена. Файл создастся с пустым содержимым.',
        )
      }
    }

    // 1) ensure blocks dir exists
    await fs.mkdir(blocksDir, { recursive: true })

    // 2) create file if not exists
    try {
      await fs.access(filePath)
      console.log(
        `Файл уже существует: ${path.relative(process.cwd(), filePath)}`,
      )
    } catch {
      // create with helperLine as first line + clipboard content only when requested
      const body =
        paste && clipText && clipText.trim().length
          ? `\n${clipText.replace(/\r\n/g, '\n')}\n`
          : '\n'
      const template = `${helperLine}\n${body}`
      await fs.writeFile(filePath, template, { flag: 'wx' })
      console.log(`Создан: ${path.relative(process.cwd(), filePath)}`)
    }

    // 3) add @use to style.scss if missing
    let style = ''
    try {
      style = await fs.readFile(styleFile, 'utf8')
    } catch (err) {
      // если style.scss нет — создаём минимальный
      style = ''
      console.log(
        `Файл style.scss не найден. Создаю: ${path.relative(
          process.cwd(),
          styleFile,
        )}`,
      )
    }

    const normalized = style.replace(/\r\n/g, '\n')
    const regex = new RegExp(`@use\\s+["']blocks/${name}["'];`)
    if (regex.test(normalized)) {
      console.log(`Строка @use для блока уже присутствует в style.scss`)
    } else {
      const newStyle =
        (normalized.trim().length ? normalized.trimEnd() + '\n\n' : '') +
        useLine +
        '\n'
      await fs.writeFile(styleFile, newStyle, 'utf8')
      console.log(`Добавлена строка в style.scss: ${useLine}`)
    }
  } catch (err) {
    console.error('Ошибка:', err.message || err)
    process.exit(2)
  }
}

main()

/*

Доп. файлы (примеры) — добавьте их в проект:

1) package.json script

{
  "scripts": {
    "add-block": "node tools/add-block.js"
  }
}

Запуск:
  npm run add-block -- link

2) .vscode/tasks.json — чтобы запускать из палитры и вводить имя блока

{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Add SCSS block (from clipboard)",
      "type": "shell",
      "command": "node ${workspaceFolder}/tools/add-block.js ${input:blockName}",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "blockName",
      "type": "promptString",
      "description": "Введите имя блока (например: link)"
    }
  ]
}

Инструкция:
  1) npm install clipboardy --save-dev
  2) Скопировать HTML/CSS/SCSS-код в буфер обмена
  3) Запустить задачу в VS Code: Run Task → Add SCSS block (from clipboard) → ввести имя блока
  4) Скрипт создаст scss/blocks/_<block>.scss с первой строкой
     @use '../helpers' as *;
     и вставит содержимое буфера обмена под ней.
  5) Также добавит в scss/style.scss строку @use "blocks/<block>"; если её нет.

*/
