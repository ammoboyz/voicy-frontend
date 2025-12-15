import '../lib/emoji-picker-element.js'

document.addEventListener('DOMContentLoaded', function () {
  setItemActive('.like-button')
  setItemActive('.play-button')

  // dropdowns
  init_dropdown()

  // tabs
  init_tabs()

  // page
  init_pageSwitch()

  // glass
  if (document.body.classList.contains('is-liquid')) {
    const liquidHtml = init_liquidGlass()
    document.body.insertAdjacentHTML('afterbegin', liquidHtml)
  }

  // emodji
  init_emoji()

  //
  init_audioplayer()

  //
  init_selectionList()
})
// set active func

function setItemActive(
  parentSelector,
  itemSelector = null,
  activeClass = 'is-active',
  toggle = true,
) {
  document.querySelectorAll(parentSelector).forEach((parent) => {
    if (!parent) return

    parent.addEventListener('click', (e) => {
      const item = itemSelector ? e.target.closest(itemSelector) : parent

      if (!item || !parent.contains(item)) return

      if (toggle && item.classList.contains(activeClass)) {
        item.classList.remove(activeClass)
        return
      }

      const items = itemSelector
        ? parent.querySelectorAll(itemSelector)
        : [parent]

      items.forEach((i) => i.classList.remove(activeClass))
      item.classList.add(activeClass)
    })
  })
}

// dropdown
function init_dropdown() {
  const dropdowns = document.querySelectorAll('.dropdown')

  if (!dropdowns.length) {
    return
  }

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector('.dropdown__trigger')
    const isSelectable = dropdown.classList.contains('dropdown--select')
    const isCloseChoice = dropdown.classList.contains('dropdown--close-choice')

    const items = dropdown.querySelectorAll('.dropdown__item')

    const closeOnOutsideClick = (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-active')
        document.removeEventListener('click', closeOnOutsideClick)
      }
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      const isActive = dropdown.classList.toggle('is-active')

      if (isActive) {
        document.addEventListener('click', closeOnOutsideClick)
      } else {
        document.removeEventListener('click', closeOnOutsideClick)
      }
    })

    if (isCloseChoice) {
      items.forEach((item) => {
        item.addEventListener('click', function (e) {
          e.stopPropagation()

          if (isSelectable) {
            btn.textContent = item.textContent.trim()
            dropdown.classList.add('is-choice')
          }

          dropdown.classList.remove('is-active')
          document.removeEventListener('click', closeOnOutsideClick)
        })
      })
    }
  })
}

// tabs
function init_tabs() {
  const tabsBlocks = document.querySelectorAll('.tabs')
  if (!tabsBlocks.length) return

  function activateTabInBlock(tabsBlock, index) {
    const nav = tabsBlock.querySelector('.tabs__nav')
    const buttons = nav.querySelectorAll('.tabs__nav-button')
    const content_wrapper = tabsBlock.querySelector('.tabs__content-wrapper')
    const items = content_wrapper.querySelectorAll(
      ':scope > .tabs__content-item',
    )

    buttons.forEach((btn) => btn.classList.remove('is-active'))
    items.forEach((item) => item.classList.remove('is-active'))

    if (buttons[index] && items[index]) {
      buttons[index].classList.add('is-active')
      items[index].classList.add('is-active')
    }
  }

  function switchToTabContent(targetContent) {
    const tabsBlock = targetContent.closest('.tabs')
    if (!tabsBlock) {
      console.warn('Target content not inside a .tabs container')
      return
    }

    const contentWrapper = tabsBlock.querySelector('.tabs__content-wrapper')
    if (!contentWrapper) {
      console.warn('Tabs block missing .tabs__content-wrapper')
      return
    }

    const items = Array.from(contentWrapper.children).filter((el) =>
      el.matches('.tabs__content-item'),
    )
    const index = items.indexOf(targetContent)

    if (index === -1) {
      console.warn('Target content not found among tab items')
      return
    }

    activateTabInBlock(tabsBlock, index)
  }

  tabsBlocks.forEach((tab) => {
    const nav = tab.querySelector('.tabs__nav')
    const buttons = nav.querySelectorAll('.tabs__nav-button')
    const content_wrapper = tab.querySelector('.tabs__content-wrapper')
    const items = content_wrapper.querySelectorAll(
      ':scope > .tabs__content-item',
    )

    if (buttons[0] && items[0]) {
      activateTabInBlock(tab, 0)
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        activateTabInBlock(tab, index)
      })
    })
  })

  document.querySelectorAll('[data-tab-content-target]').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()

      const targetId = button.getAttribute('data-tab-content-target')
      const targetContent = document.getElementById(targetId)

      if (!targetContent) {
        console.error(`Tab content with ID "${targetId}" not found`)
        return
      }

      const targetPage = targetContent.closest('.page')
      const isTargetVisible = targetPage?.classList.contains('page--show')

      if (isTargetVisible) {
        switchToTabContent(targetContent)
        return
      }

      const currentPage = button.closest('.page.page--show')

      if (currentPage && targetPage && currentPage !== targetPage) {
        currentPage.classList.remove('page--show')
        targetPage.classList.add('page--show')
      }

      switchToTabContent(targetContent)
    })
  })
}

// page switcch
function init_pageSwitch() {
  const openButton = document.querySelector('#open-add-sound-form')
  const closeButton = document.querySelector('#close-add-sound-form')
  const mainPage = document.querySelector('.page--main')
  const formPage = document.querySelector('.page--form')

  function openForm() {
    mainPage.classList.remove('page--show')
    formPage.classList.add('page--show')
  }

  function closeForm() {
    formPage.classList.remove('page--show')
    mainPage.classList.add('page--show')
  }

  openButton.addEventListener('click', openForm)
  closeButton.addEventListener('click', closeForm)
}

// liquid glass
function init_liquidGlass() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  const filterValue = isSafari
    ? 'blur(2px)'
    : 'url(#displacementFilter) blur(2px)'

  return `
      <svg style="position:absolute;width:0;height:0;overflow:hidden;" aria-hidden="true">
                <filter id="displacementFilter">
                    <feImage
                      href="data:image/png;base64,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"
                        preserveAspectRatio="none"/>

                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="turbulence"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
      <style>
        .bg-liquid-glass {
          backdrop-filter: ${filterValue};
          /* -webkit-backdrop-filter: ${filterValue}; */
      }
      </style>
    `
}

// emoji
function init_emoji() {
  const selector = document.querySelector('.emoji-selector')
  if (!selector) return

  const pickerContainer = selector.querySelector(
    '.emoji-selector__picker-container',
  )
  const selected = selector.querySelector('.emoji-selector__selected')
  const hiddenInput = selector.querySelector('.emoji-selector__input')

  selector.addEventListener('click', (e) => {
    if (e.target.closest('.emoji-selector__picker-container')) return
    selector.classList.toggle('is-active')
  })

  pickerContainer.addEventListener('emoji-click', (e) => {
    const emoji = e.detail.unicode

    selected.textContent = emoji
    hiddenInput.value = emoji
    selector.classList.add('is-selected')
    selector.classList.remove('is-active')
  })

  document.addEventListener('click', (e) => {
    if (!selector.contains(e.target)) {
      selector.classList.remove('is-active')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      selector.classList.remove('is-active')
    }
  })
}

// audioplayer
function init_audioplayer() {
  const wrapper = document.querySelector('.file-upload')
  const input = wrapper.querySelector('.file-upload__field-input')

  const player = wrapper.querySelector('.player')
  const playButton = player.querySelector('.player__button-play')
  const reloadButton = player.querySelector('.player__button-reload')
  const deleteButton = player.querySelector('.player__button-delete')
  const currentDurationEl = player.querySelector('.player__duration-current')
  const totalDurationEl = player.querySelector('.player__duration-total')
  const sizeEl = player.querySelector('.player__size')

  let audio = null
  let audioUrl = null
  let playHandler = null
  let reloadHandler = null
  let deleteHandler = null
  let timeUpdateHandler = null
  let totalTime = 0

  // Сброс состояния плеера до начального
  const resetPlayer = () => {
    // Сброс состояния кнопки play
    playButton.classList.remove('is-active')

    // Очистка аудио
    if (audio) {
      audio.pause()
      audio.removeEventListener('timeupdate', timeUpdateHandler)
      audio.removeEventListener('ended', handleAudioEnded)
      audio.removeEventListener('loadedmetadata', handleMetadataLoaded)
    }

    // Удаление URL объекта
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
      audioUrl = null
    }

    // Очистка переменных
    audio = null
    totalTime = 0

    // Удаление обработчиков событий
    playButton.removeEventListener('click', playHandler)
    reloadButton.removeEventListener('click', reloadHandler)
    deleteButton.removeEventListener('click', deleteHandler)

    // Сброс значения input
    input.value = ''

    // Удаление классов состояния загрузки
    wrapper.classList.remove('has-uploading', 'is-upload')
  }

  // Обработчик обновления текущего времени
  const updateTimeDisplay = () => {
    if (!audio || isNaN(totalTime)) return
    currentDurationEl.textContent = formatTime(audio.currentTime)
  }

  // Обработчик завершения воспроизведения
  const handleAudioEnded = () => {
    playButton.classList.remove('is-active')
    currentDurationEl.textContent = '00:00'
  }

  // Обработчик загрузки метаданных
  const handleMetadataLoaded = () => {
    totalTime = audio.duration
    totalDurationEl.textContent = formatTime(totalTime)
    currentDurationEl.textContent = '00:00'

    // Убираем класс загрузки и добавляем класс успешной загрузки
    wrapper.classList.remove('has-uploading')
    wrapper.classList.add('is-upload')
  }

  input.addEventListener('change', (e) => {
    const file = e.target.files[0]

    // Проверка на аудиофайл
    if (file && !file.type.startsWith('audio/')) {
      alert('Разрешены только аудиофайлы!')
      input.value = ''
      wrapper.classList.remove('has-uploading')
      return
    }

    // Сброс предыдущего состояния
    resetPlayer()

    // Добавляем класс процесса загрузки
    wrapper.classList.add('has-uploading')
    wrapper.classList.remove('is-upload')

    // Настройка нового аудио
    audioUrl = URL.createObjectURL(file)
    audio = new Audio(audioUrl)

    // Размер файла
    sizeEl.textContent = `${(file.size / 1024).toFixed(2)} кб`

    // Обработчики событий аудио
    audio.addEventListener('loadedmetadata', handleMetadataLoaded)

    // Обработчик ошибок загрузки
    audio.addEventListener('error', () => {
      wrapper.classList.remove('has-uploading')
      resetPlayer()
      alert('Ошибка загрузки аудиофайла')
    })

    // Обработчик обновления времени
    timeUpdateHandler = () => {
      requestAnimationFrame(updateTimeDisplay)
    }

    audio.addEventListener('timeupdate', timeUpdateHandler)

    // Обработчик воспроизведения/паузы
    playHandler = () => {
      if (!audio) return

      if (audio.paused) {
        audio.play()
        playButton.classList.add('is-active')
      } else {
        audio.pause()
        playButton.classList.remove('is-active')
      }
    }

    // Обработчик перезагрузки
    reloadHandler = () => {
      if (!audio) return
      audio.currentTime = 0
      audio.play()
      playButton.classList.add('is-active')
      currentDurationEl.textContent = '00:00'
    }

    // Обработчик удаления
    deleteHandler = () => {
      resetPlayer()
    }

    // Назначение обработчиков
    playButton.addEventListener('click', playHandler)
    reloadButton.addEventListener('click', reloadHandler)
    deleteButton.addEventListener('click', deleteHandler)

    // Обработчик окончания воспроизведения
    audio.addEventListener('ended', handleAudioEnded)
  })

  // Форматирование времени
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00'

    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Инициализация
  currentDurationEl.textContent = '00:00'
  totalDurationEl.textContent = '00:00'
}

// selectionList
function init_selectionList() {
  const selectionLists = document.querySelectorAll('.selection-list')

  if (!selectionLists.length) return

  selectionLists.forEach((list) => {
    if (list.dataset.selectionListInitialized) return

    const maxSelection = parseInt(list.dataset.selectionElemCount, 10)
    const checkboxes = list.querySelectorAll('.selection-list__element')
    const isInDropdown = list.classList.contains('selection-list--in-dropdown')

    if (isNaN(maxSelection) || maxSelection <= 0) {
      list.dataset.selectionListInitialized = 'invalid'
      return
    }

    list.dataset.selectionListInitialized = 'true'

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        const selectedCount = list.querySelectorAll(
          '.selection-list__element:checked',
        ).length

        if (this.checked && selectedCount > maxSelection) {
          this.checked = false
          return
        }

        if (isInDropdown && selectedCount === maxSelection) {
          const dropdown = list.closest('.dropdown')
          if (dropdown) {
            dropdown.classList.remove('is-active')
          }
        }
      })
    })
  })
}
