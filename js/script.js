import '../lib/emoji-picker-element.js'
import { apiFetch } from './apiFetch.js'

const tg = window.Telegram?.WebApp
const DEBUG_ITEMS = [
  {
    id: 7965,
    title: '😱 Хуееееэеээе бр бр патапим',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/DoyUqrsGKcPmsyVlUOcjIkLWpIlnPt',
  },
  {
    id: 7950,
    title: '🤙 Бр бр патапим хуеэуээеэеэ',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/KlJiAXdCMoArJyhacTRjxNInjOyIrT',
  },
  {
    id: 7856,
    title: "🐵 Qotag'ini uzilar pidarasni",
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/ejFAFByEcUsTdllxTtDGucfaOElSJU',
  },
  {
    id: 7051,
    title: '🙏 Молюсь об этом каждый день',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/PWhmuTDgawuaVfdAMZUSLCVtUjQhEo',
  },
  {
    id: 7041,
    title: '🤙 э котак басина туда встань',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/dylLWetDxtsqVRWZjDsZAZVCHUyVTy',
  },
  {
    id: 6869,
    title: '😴 Але, мужик, тебе нормально?',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/aMyiswYTCjeGmcnnVRidhuWnIVFuXV',
  },
  {
    id: 6867,
    title: '🤥 Та шо?',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/LnfKTlobcMGdDYUAKqHOIuvEWrWFuo',
  },
  {
    id: 6865,
    title: '👋 я передаю привет анечке',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/rNTQwzAUmPbCIfulnSTEcVzZfjFOHs',
  },
  {
    id: 6855,
    title: '🥮 Халяль чебуреки пахлава все по скидк',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/sCxtELOcihIBVjhSoZoMLBEgUVcwse',
  },
  {
    id: 5659,
    title: '😀 Даша Дешик ',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/OLQiLElYewbUKqHkHdDBDtrhguJZAr',
  },
  {
    id: 5366,
    title: '😌 Golden knight ',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/zhSLWMceHAyAmvEgdXXtJeiYdYrZCf',
  },
  {
    id: 4032,
    title: '🧔‍♂️ Драться можно каждый день ',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/yuTzPloVUvFGxfWVpTCvIRBvXtIBXM',
  },
  {
    id: 3972,
    title: '😅 McGregor: Break out the red panties',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/zGZKlUXsPkrHoDdvTTbNaZgkpKdTcP',
  },
  {
    id: 3929,
    title: '👍 Потому что вы демо не смотрите',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/wmOOFYQTFnbOQanpPEdnPYuCgVZKRr',
  },
  {
    id: 3927,
    title: '😁 St-Pierre: But i know',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/kTbbGBmxSyUKFCQyBfYCttbMdbZSKQ',
  },
  {
    id: 3926,
    title: '😀 St-Pierre: I think you work so much',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/LbLUEGXWTJagpAikOdGSfItYRuKAWJ',
  },
  {
    id: 3920,
    title: '😀 Max Holloway: I kind of mad, guys',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/oTxfiftNLSdAeNfYvhtmjYFObXlgwG',
  },
  {
    id: 3888,
    title: '😂 Khabib: I am born ready, bro',
    description: null,
    views_count: 1,
    category_id: null,
    liked: true,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/pfANQmBeBSOFzpyuWzRwroVNzooMgx',
  },
  {
    id: 3780,
    title: '👍 St-Pierre: Time physical damage',
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/wUdLCEEtAoCEEjVVWEluELbfEQLlDP',
  },
  {
    id: 3778,
    title: "😊 Emelianenko: Today I'm coming",
    description: null,
    views_count: 1,
    category_id: null,
    liked: false,
    moderation_status: 'approved',
    url: 'https://test.aichatpro.ru/api/sounds/play/AMLIglcfLEqgzERFzoPPnxMpCstaNy',
  },
]

if (tg) {
  tg.expand()
  tg.ready()
} else {
  console.log('Running outside Telegram (dev mode)')
}

document.documentElement.classList.add('theme-ready')
applyTelegramThemeClass()

const searchInput = document.getElementById('sound-search')
const API_SOUNDS_URL = '/api/sounds'
const API_TRACKER_URL = '/api/tracker'
const SKELETON_COUNT = 6

const AUDIO_CATEGORIES = {
  all: 'Все',
  memes: 'Мемы',
  cringe: 'Кринж',
  relationships: 'Отношения',
  work_study: 'Работа и учёба',
  games: 'Игры',
  streams: 'Стримы',
  movies: 'Кино',
  anime: 'Аниме',
  ambience: 'Атмосфера',
}

let soundState = {
  context: 'popular',
  page: 1,
  limit: 20,
  hasNext: true,
  loading: false,
  search: null,
  categories: null,
}

let currentAudio = null
let currentButton = null

let selectedAudioFile = null
let selectedEmoji = ''

let fetchActionOncePromise = null

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.dropdown__trigger')
  if (!trigger) return

  const dropdown = trigger.closest('.dropdown')
  dropdown?.classList.toggle('is-active')
})

document.querySelectorAll('.sound-block__list').length

document.addEventListener('DOMContentLoaded', function () {
  setItemActive('.like-button')
  setItemActive('.play-button')

  renderCategories()

  // dropdowns
  init_selectionList()

  // tabs
  init_tabs()

  // page
  init_pageSwitch()

  initUploadCategories()

  // glass
  if (document.body.classList.contains('is-liquid')) {
    const liquidHtml = init_liquidGlass()
    document.body.insertAdjacentHTML('afterbegin', liquidHtml)
  }

  init_emoji()

  init_audioplayer()

  const cardsContainer = document.querySelectorAll('.sound-block__list')

  enableHapticFeedback(cardsContainer, '.play-button')
  enableHapticFeedback(cardsContainer, '.like-button')

  let scrollLocked = false

  const scroller = document.querySelector('.page--main') // <-- важно
  scroller.addEventListener(
    'scroll',
    () => {
      if (scrollLocked) return

      const scrollTop = scroller.scrollTop
      const clientHeight = scroller.clientHeight
      const scrollHeight = scroller.scrollHeight

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        scrollLocked = true
        fetchSounds().finally(() => (scrollLocked = false))
      }
    },
    { passive: true },
  )

  fetchAction()
  renderSounds(DEBUG_ITEMS)
})

document.addEventListener('click', (e) => {
  const activeDropdowns = document.querySelectorAll('.dropdown.is-active')

  activeDropdowns.forEach((dropdown) => {
    const selectionList = dropdown.querySelector('.selection-list--in-dropdown')

    if (!selectionList) return

    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('is-active')
    }
  })
})

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.share-btn')
  if (!btn) return
  shareVoiceLikeSounds(btn.getAttribute('data-share-sound-id'))
})

document.addEventListener('click', (e) => {
  const btn = e.target.closest('#publish-voice')
  if (!btn) return

  publishVoice()
})

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-button')
  if (!btn) return

  const url = btn.dataset.url
  if (!url) return

  // если нажали на ту же кнопку — стоп
  if (currentAudio && currentButton === btn) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    btn.classList.remove('is-active')
    currentAudio = null
    currentButton = null
    return
  }

  // если играло другое аудио — останавливаем его
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }
  if (currentButton) {
    currentButton.classList.remove('is-active')
  }

  // запускаем новое
  currentAudio = new Audio(url)
  currentButton = btn
  btn.classList.add('is-active')

  currentAudio.play()

  currentAudio.onended = () => {
    btn.classList.remove('is-active')
    currentAudio = null
    currentButton = null
  }
})

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open-sounds]')
  if (!btn) return

  setContext(btn.dataset.openSounds)
})

document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.like-button')
  if (!btn) return

  const id = btn.dataset.id
  if (!id) return

  const wasLiked = btn.classList.contains('is-active')
  const ctx = soundState.context // 'popular' | 'favorites' | 'uploads'
  const itemEl = btn.closest('.sound-block__item') // <li>

  // оптимистично UI
  btn.classList.toggle('is-active')

  try {
    await apiFetch(`/api/sounds/${id}/like`, {
      method: wasLiked ? 'DELETE' : 'POST',
      headers: {
        Authorization: `Bearer ${tg.initData}`,
      },
    })

    // ✅ если сняли лайк в избранном — убираем элемент из списка
    if (ctx === 'favorites' && wasLiked) {
      itemEl?.remove()

      // (опционально) уменьшить счётчик "Всего звуков -"
      const block = itemEl?.closest('.sound-block')
      const countEl = block?.querySelector('.sound-block__quantity-value')
      if (countEl) {
        const current =
          Number(String(countEl.textContent).replace(/[^\d]/g, '')) || 0
        countEl.textContent = String(Math.max(0, current - 1))
      }

      // (опционально) если список пуст — можно догрузить/перерендерить с сервера
      const list = getSoundListEl('favorites')
      if (list && list.children.length === 0) {
        // чтобы точно синхронизироваться с бэком
        fetchSounds(true)
      }
    }
  } catch (err) {
    btn.classList.toggle('is-active')
    alert(err.message)
    console.error('Like request failed', err)
  }
})

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

function init_selectionList() {
  const selectionLists = document.querySelectorAll('.selection-list')
  if (!selectionLists.length) return

  selectionLists.forEach((list) => {
    if (list.dataset.selectionListInitialized) return

    const maxSelection = parseInt(list.dataset.selectionElemCount, 10)
    const checkboxes = Array.from(
      list.querySelectorAll('.selection-list__element'),
    )
    const isInDropdown = list.classList.contains('selection-list--in-dropdown')

    if (isNaN(maxSelection) || maxSelection <= 0) {
      list.dataset.selectionListInitialized = 'invalid'
      return
    }

    list.dataset.selectionListInitialized = 'true'

    const allCheckbox = checkboxes.find((c) => c.dataset.category === 'all')

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        let checked = checkboxes.filter((c) => c.checked)

        if (allCheckbox && this !== allCheckbox && this.checked) {
          allCheckbox.checked = false
          checked = checkboxes.filter((c) => c.checked)
        }

        if (allCheckbox && this === allCheckbox && this.checked) {
          checkboxes.forEach((c) => {
            if (c !== allCheckbox) c.checked = false
          })
          checked = [allCheckbox]
        }

        // лимит выбора
        if (this.checked && checked.length > maxSelection) {
          this.checked = false
          return
        }

        // автозакрытие дропдауна
        if (isInDropdown && checked.length === maxSelection) {
          const dropdown = list.closest('.dropdown')
          dropdown?.classList.remove('is-active')
        }
      })
    })
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

    document.querySelector('[data-open-sounds="popular"]')?.click()
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

if (searchInput) {
  searchInput.addEventListener(
    'input',
    debounce((e) => {
      soundState.search = e.target.value || null
      fetchSounds(true)
    }, 400),
  )
}

function debounce(fn, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

function updateTotalCount(total, context = soundState.context) {
  const list = getSoundListEl(context) // UL по data-sounds-context
  const block = list?.closest('.sound-block') // нужный sound-block вокруг списка
  const el = block?.querySelector('.sound-block__quantity-value') // нужный счётчик
  if (!el) return

  el.textContent = formatViews(total)
}

function getSoundListEl(context = soundState.context) {
  return document.querySelector(
    `.sound-block__list[data-sounds-context="${context}"]`,
  )
}

async function fetchSounds(reset = false) {
  if (soundState.loading) return
  if (!soundState.hasNext && !reset) return

  const list = getSoundListEl()
  if (!list) return

  const context = soundState.context
  soundState.loading = true

  if (reset) {
    soundState.page = 1
    soundState.hasNext = true
    list.innerHTML = ''
    showSkeleton(list, SKELETON_COUNT)
  } else {
    appendSkeleton(list, 3)
  }

  const params = new URLSearchParams({
    page: soundState.page,
    limit: soundState.limit,
  })

  if (soundState.search && context === 'popular') {
    params.append('search', soundState.search)
  }

  if (soundState.categories) {
    params.append('categories', soundState.categories)
  }

  let urlBase = API_SOUNDS_URL
  if (context === 'favorites') urlBase = `${API_SOUNDS_URL}/my/favorite`
  if (context === 'uploads') urlBase = `${API_SOUNDS_URL}/my/upload`

  try {
    const data = await apiFetch(`${urlBase}?${params.toString()}`, {
      headers: { Authorization: `Bearer ${tg.initData}` },
    })

    if (reset) updateTotalCount(data.total, context)

    renderSounds(data.items)

    soundState.hasNext = data.has_next
    soundState.page += 1
  } catch (err) {
    alert(err.message)
    console.error('Fetch sounds failed', err)
  } finally {
    // ✅ всегда убираем лоадеры снизу/сверху
    hideSkeleton(list)
    soundState.loading = false
  }
}

function formatViews(count) {
  const num = Number(count)

  if (!Number.isFinite(num) || num < 0) {
    return '0'
  }

  if (num >= 1_000_000) {
    const value = num / 1_000_000
    return (value % 1 === 0 ? value : value.toFixed(1)) + 'м'
  }

  if (num >= 1_000) {
    const value = num / 1_000
    return (value % 1 === 0 ? value : value.toFixed(1)) + 'к'
  }

  return String(Math.floor(num))
}

function renderSounds(items) {
  if (!Array.isArray(items) || items.length === 0) return

  // 1. Берём текущую вкладку
  const context = soundState.context

  // 2. Берём UL, который ей соответствует
  const list = document.querySelector(
    `.sound-block__list[data-sounds-context="${context}"]`,
  )

  if (!list) {
    console.warn('UL not found for context:', context)
    return
  }

  items.forEach((sound) => {
    const li = document.createElement('li')
    li.className = 'sound-block__item'
    const status = sound.moderation_status // pending | approved | rejected

    const showViews = !(context === 'uploads' && status === 'rejected')
    const viewsHtml = showViews
      ? `
        <div class="info-element info-element--views">
          <svg
            class="info-element__icon"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_268)">
              <path
                d="M13.5747 5.49434C12.6699 4.02084 10.6119 1.54868 6.99991 1.54868C3.38791 1.54868 1.32991 4.02084 0.425158 5.49434C0.145466 5.94672 -0.00268555 6.46807 -0.00268555 6.99993C-0.00268555 7.53178 0.145466 8.05313 0.425158 8.50551C1.32991 9.97901 3.38791 12.4512 6.99991 12.4512C10.6119 12.4512 12.6699 9.97901 13.5747 8.50551C13.8543 8.05313 14.0025 7.53178 14.0025 6.99993C14.0025 6.46807 13.8543 5.94672 13.5747 5.49434V5.49434ZM12.5801 7.89476C11.8031 9.15826 10.0443 11.2845 6.99991 11.2845C3.95549 11.2845 2.19674 9.15826 1.41974 7.89476C1.25357 7.62587 1.16555 7.31602 1.16555 6.99993C1.16555 6.68383 1.25357 6.37398 1.41974 6.10509C2.19674 4.84159 3.95549 2.71534 6.99991 2.71534C10.0443 2.71534 11.8031 4.83926 12.5801 6.10509C12.7462 6.37398 12.8343 6.68383 12.8343 6.99993C12.8343 7.31602 12.7462 7.62587 12.5801 7.89476V7.89476Z"
                fill="#5CC8FF"
              />
              <path
                d="M6.99992 4.08325C6.42306 4.08325 5.85915 4.25431 5.37951 4.5748C4.89986 4.89529 4.52603 5.35081 4.30527 5.88376C4.08452 6.41671 4.02676 7.00315 4.1393 7.56893C4.25184 8.13471 4.52962 8.65441 4.93753 9.06231C5.34543 9.47022 5.86513 9.748 6.43091 9.86054C6.99668 9.97308 7.58313 9.91532 8.11608 9.69457C8.64903 9.47381 9.10455 9.09998 9.42504 8.62033C9.74553 8.14069 9.91659 7.57678 9.91659 6.99992C9.91566 6.22666 9.60807 5.48533 9.06129 4.93855C8.51451 4.39177 7.77318 4.08418 6.99992 4.08325V4.08325ZM6.99992 8.74992C6.6538 8.74992 6.31546 8.64728 6.02767 8.45499C5.73989 8.2627 5.51558 7.98939 5.38313 7.66961C5.25068 7.34984 5.21602 6.99798 5.28355 6.65851C5.35107 6.31904 5.51774 6.00722 5.76248 5.76248C6.00722 5.51774 6.31905 5.35107 6.65851 5.28354C6.99798 5.21602 7.34985 5.25068 7.66962 5.38313C7.98939 5.51558 8.2627 5.73988 8.45499 6.02767C8.64728 6.31546 8.74992 6.6538 8.74992 6.99992C8.74992 7.46405 8.56555 7.90917 8.23736 8.23736C7.90917 8.56554 7.46405 8.74992 6.99992 8.74992Z"
                fill="#5CC8FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_268">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span class="info-element__value">${formatViews(sound.views_count ?? 0)}</span>
        </div>
      `
      : ''

    const footLeftHtml =
      context === 'uploads'
        ? `
        ${viewsHtml}
        ${renderUploadFootLeft(status)}
      `
        : viewsHtml
    const footRightHtml =
      context === 'uploads'
        ? renderUploadStatusRight(status, sound.id)
        : `
        <button class="like-button ${sound.liked ? 'is-active' : ''}" type="button" data-id="${sound.id}">
          <svg class="like-button__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_52_11933)">
              <path d="M1.00027 6.70593L0.99929 6.68738C0.958442 5.60485 1.34801 4.55025 2.0823 3.75378C2.80908 2.96551 3.81515 2.49357 4.88503 2.43835C5.54464 2.45306 6.18913 2.63882 6.75515 2.97839C7.32849 3.3224 7.80146 3.81138 8.12527 4.39636L9.00027 5.97742L9.87527 4.39636C10.199 3.81153 10.6712 3.32235 11.2444 2.97839C11.8101 2.639 12.4544 2.45329 13.1135 2.43835C14.184 2.49323 15.1911 2.96516 15.9182 3.75378C16.6524 4.55022 17.0411 5.60497 17.0003 6.68738V6.72449C17.0003 8.10051 16.2621 9.6672 15.0335 11.2811C13.9742 12.6725 12.6258 14.001 11.3157 15.1415L10.7571 15.619C10.2652 16.0324 9.6428 16.2596 9.00027 16.2596C8.35764 16.2596 7.73541 16.0325 7.24343 15.619H7.24245C5.7653 14.38 4.1777 12.8713 2.96706 11.2811C1.73839 9.66719 1.00027 8.10052 1.00027 6.72449V6.70593Z" stroke="#A5A7AC" stroke-width="2"></path>
            </g>
            <defs>
              <clipPath id="clip0_52_11933">
                <rect width="18" height="18" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>

        <button class="button share-btn" data-share-sound-id="${sound.id}" type="button">
          <svg
            class="button__icon"

            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_68)">
              <path
                d="M13.486 0.514518C13.2769 0.302843 13.0167 0.148684 12.7306 0.0669362C12.4445 -0.0148115 12.1421 -0.0213847 11.8527 0.0478516L2.51938 2.01368C1.98188 2.0874 1.47564 2.30971 1.05767 2.65559C0.63969 3.00147 0.326581 3.45718 0.153601 3.97139C-0.0193799 4.4856 -0.0453613 5.0379 0.0785823 5.56608C0.202526 6.09426 0.471472 6.57734 0.855132 6.96093L1.8573 7.96252C1.91154 8.01674 1.95455 8.08113 1.98388 8.152C2.01321 8.22287 2.02828 8.29882 2.02822 8.37552V10.2235C2.0295 10.4834 2.08932 10.7396 2.20322 10.9731L2.19855 10.9772L2.21372 10.9924C2.38464 11.336 2.6638 11.6139 3.00822 11.7834L3.02338 11.7985L3.02747 11.7939C3.26101 11.9077 3.51721 11.9676 3.77705 11.9689H5.62505C5.77966 11.9687 5.928 12.03 6.03747 12.1392L7.03905 13.1408C7.30769 13.4124 7.62743 13.6281 7.97984 13.7756C8.33225 13.9231 8.71036 13.9994 9.09238 14C9.41074 13.9996 9.72692 13.9476 10.0286 13.846C10.5381 13.6787 10.9908 13.3724 11.3354 12.9615C11.6801 12.5507 11.9031 12.0517 11.9793 11.5209L13.948 2.1671C14.0209 1.87523 14.0166 1.56943 13.9356 1.27971C13.8546 0.989996 13.6997 0.726309 13.486 0.514518V0.514518ZM2.6833 7.13885L1.68055 6.13727C1.44705 5.90939 1.2834 5.61965 1.2088 5.30203C1.1342 4.98441 1.15175 4.6521 1.25938 4.3441C1.36374 4.02812 1.55665 3.74877 1.81518 3.53925C2.07371 3.32974 2.38697 3.19889 2.71772 3.16227L11.9583 1.21685L3.19372 9.9826V8.37552C3.1946 8.14588 3.14994 7.91835 3.06233 7.70608C2.97472 7.49381 2.84589 7.30102 2.6833 7.13885V7.13885ZM10.833 11.3214C10.7883 11.6435 10.6546 11.9469 10.4469 12.1973C10.2393 12.4477 9.96602 12.6353 9.65771 12.7391C9.34939 12.8428 9.01827 12.8585 8.70151 12.7845C8.38475 12.7105 8.09489 12.5496 7.86447 12.32L6.86113 11.3167C6.69918 11.1538 6.50655 11.0247 6.29438 10.9368C6.08221 10.8489 5.85471 10.8039 5.62505 10.8045H4.01797L12.7837 2.04168L10.833 11.3214Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_68">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span class="button__caption">Отправить</span>
        </button>
      `

    li.innerHTML = `
      <div class="sound-card" data-sound-id="${sound.id}">
        <div class="sound-card__skeleton">
          <div class="sound-card__top">
                <div class="sound-card__skeleton-button is-skeleton"></div>

                <div class="sound-card__skeleton-top-text">
                  <div class="sound-card__skeleton-title is-skeleton"></div>
                  <div class="sound-card__skeleton-category is-skeleton"></div>
                </div>
          </div>

          <div class="sound-card__skeleton-foot sound-card__foot">
            <div class="sound-card__skeleton-foot-left is-skeleton"></div>

            <div class="sound-card__skeleton-foot-right is-skeleton"></div>
          </div>
        </div>
        <div class="sound-card__real">
          <div class="sound-card__top">
            <button class="sound-card__play-button play-button" type="button" data-url="${sound.url}">
              <!-- PLAY -->
              <svg
                class="play-button__icon-play"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="play-button__icon-circle"
                  d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                  fill="#00AAFF"
                />
                <path
                  class="play-button__icon-decor"
                  d="M32.492 19.9695L22.954 12.9755C22.209 12.4299 21.3275 12.1014 20.4073 12.0262C19.487 11.951 18.5638 12.132 17.7402 12.5494C16.9165 12.9667 16.2245 13.6039 15.7408 14.3905C15.2572 15.177 15.0007 16.0821 15 17.0055V31.0005C14.9986 31.9247 15.2536 32.8312 15.7368 33.6191C16.22 34.407 16.9124 35.0453 17.7369 35.4631C18.5614 35.8808 19.4856 36.0615 20.4067 35.9851C21.3278 35.9088 22.2096 35.5783 22.954 35.0305L32.492 28.0365C33.1249 27.572 33.6395 26.9651 33.9942 26.2648C34.3489 25.5645 34.5338 24.7905 34.5338 24.0055C34.5338 23.2204 34.3489 22.4465 33.9942 21.7462C33.6395 21.0459 33.1249 20.4389 32.492 19.9745V19.9695Z"
                  fill="white"
                  transform="translate(1.2 0)"
                />

              </svg>

              <!-- STOP -->
              <svg
                class="play-button__icon-stop"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="play-button__icon-circle"
                  d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                  fill="#00AAFF"
                />
                <path
                  class="play-button__icon-decor"
                  d="M18.5 12C17.5717 12 16.6815 12.3687 16.0251 13.0251C15.3687 13.6815 15 14.5717 15 15.5V32.5C15 33.4282 15.3687 34.3185 16.0251 34.9749C16.6815 35.6312 17.5717 36 18.5 36C19.4283 36 20.3185 35.6312 20.9749 34.9749C21.6312 34.3185 22 33.4282 22 32.5V15.5C22 14.5717 21.6312 13.6815 20.9749 13.0251C20.3185 12.3687 19.4283 12 18.5 12Z"
                  fill="white"
                />
                <path
                  class="play-button__icon-decor"
                  d="M29.5001 12C28.5719 12 27.6816 12.3687 27.0253 13.0251C26.3689 13.6815 26.0001 14.5717 26.0001 15.5V32.5C26.0001 33.4282 26.3689 34.3185 27.0253 34.9749C27.6816 35.6312 28.5719 36 29.5001 36C30.4284 36 31.3186 35.6312 31.975 34.9749C32.6314 34.3185 33.0001 33.4282 33.0001 32.5V15.5C33.0001 14.5717 32.6314 13.6815 31.975 13.0251C31.3186 12.3687 30.4284 12 29.5001 12Z"
                  fill="white"
                />
              </svg>
            </button>

            <div class="sound-card__top-text">
              <h3 class="sound-card__title">${truncate(sound.title ?? '')}</h3>
              <p class="sound-card__category">${AUDIO_CATEGORIES[sound.category_id] ?? ''}</p>
            </div>
          </div>

          <div class="sound-card__foot">
            ${footLeftHtml}
            <div class="sound-card__foot-right">
              ${footRightHtml}
            </div>
          </div>
        </div>
      </div>
    `

    list.appendChild(li)
  })
}

function truncate(text = '', max = 30) {
  if (text.length <= max) return text
  return text.slice(0, max) + '...'
}

function renderUploadStatusRight(status, soundId) {
  if (status === 'pending') {
    return `
      <div class="info-element info-element--state-check">
        <svg class="info-element__icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_0_259)">
            <path d="M13.4166 6.41667C13.2619 6.41667 13.1135 6.47813 13.0041 6.58752C12.8948 6.69692 12.8333 6.84529 12.8333 7C12.838 8.35641 12.3715 9.67236 11.5135 10.7229C10.6555 11.7735 9.45925 12.4934 8.12923 12.7597C6.79921 13.026 5.41799 12.8221 4.22165 12.1828C3.02532 11.5436 2.08814 10.5087 1.57031 9.25498C1.05248 8.00129 0.986148 6.60668 1.38265 5.3095C1.77914 4.01233 2.61386 2.89313 3.74411 2.14321C4.87437 1.39328 6.23 1.05919 7.57929 1.19803C8.92859 1.33688 10.1878 1.94004 11.1416 2.90442C11.1224 2.90965 11.103 2.91374 11.0833 2.91667H9.33329C9.17858 2.91667 9.03021 2.97813 8.92082 3.08752C8.81142 3.19692 8.74996 3.34529 8.74996 3.5C8.74996 3.65471 8.81142 3.80308 8.92082 3.91248C9.03021 4.02188 9.17858 4.08333 9.33329 4.08333H11.0833C11.5474 4.08333 11.9925 3.89896 12.3207 3.57077C12.6489 3.24258 12.8333 2.79746 12.8333 2.33333V0.583333C12.8333 0.428624 12.7718 0.280251 12.6624 0.170854C12.553 0.0614582 12.4047 0 12.25 0C12.0953 0 11.9469 0.0614582 11.8375 0.170854C11.7281 0.280251 11.6666 0.428624 11.6666 0.583333V1.78792C10.4723 0.720143 8.94766 0.0945971 7.34754 0.0158099C5.74742 -0.0629774 4.16872 0.409767 2.87526 1.35505C1.58179 2.30032 0.651914 3.66087 0.241009 5.20934C-0.169897 6.75781 -0.0369388 8.4004 0.617666 9.86262C1.27227 11.3248 2.40887 12.5181 3.83753 13.2431C5.26619 13.968 6.90036 14.1807 8.46698 13.8456C10.0336 13.5104 11.4378 12.6478 12.4448 11.4019C13.4519 10.1559 14.0008 8.60206 14 7C14 6.84529 13.9385 6.69692 13.8291 6.58752C13.7197 6.47813 13.5713 6.41667 13.4166 6.41667Z"
              fill="#5CC8FF"/>
            <path d="M7.00008 3.5C6.84537 3.5 6.697 3.56146 6.5876 3.67085C6.47821 3.78025 6.41675 3.92862 6.41675 4.08333V7C6.41678 7.1547 6.47826 7.30305 6.58766 7.41242L8.33766 9.16242C8.44768 9.26868 8.59503 9.32747 8.74798 9.32614C8.90093 9.32481 9.04724 9.26347 9.15539 9.15531C9.26355 9.04716 9.32489 8.90085 9.32622 8.7479C9.32755 8.59495 9.26876 8.4476 9.1625 8.33758L7.58341 6.7585V4.08333C7.58341 3.92862 7.52196 3.78025 7.41256 3.67085C7.30316 3.56146 7.15479 3.5 7.00008 3.5Z"
              fill="#5CC8FF"/>
          </g>
          <defs><clipPath id="clip0_0_259"><rect width="14" height="14" fill="white"/></clipPath></defs>
        </svg>
        <span class="info-element__value">На проверке</span>
      </div>
    `
  }

  if (status === 'rejected') {
    return `
      <div class="info-element info-element--state-rejected">
        <svg class="info-element__icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_0_273)">
            <path d="M13.8293 0.171158C13.7199 0.0618002 13.5716 0.000366211 13.4169 0.000366211C13.2622 0.000366211 13.1139 0.0618002 13.0045 0.171158L7.00024 6.17541L0.995992 0.171158C0.886601 0.0618002 0.738254 0.000366211 0.583575 0.000366211C0.428896 0.000366211 0.280549 0.0618002 0.171158 0.171158C0.0618002 0.280549 0.000366211 0.428896 0.000366211 0.583575C0.000366211 0.738254 0.0618002 0.886601 0.171158 0.995992L6.17541 7.00024L0.171158 13.0045C0.0618002 13.1139 0.000366211 13.2622 0.000366211 13.4169C0.000366211 13.5716 0.0618002 13.7199 0.171158 13.8293C0.280549 13.9387 0.428896 14.0001 0.583575 14.0001C0.738254 14.0001 0.886601 13.9387 0.995992 13.8293L7.00024 7.82508L13.0045 13.8293C13.1139 13.9387 13.2622 14.0001 13.4169 14.0001C13.5716 14.0001 13.7199 13.9387 13.8293 13.8293C13.9387 13.7199 14.0001 13.5716 14.0001 13.4169C14.0001 13.2622 13.9387 13.1139 13.8293 13.0045L7.82508 7.00024L13.8293 0.995992C13.9387 0.886601 14.0001 0.738254 14.0001 0.583575C14.0001 0.428896 13.9387 0.280549 13.8293 0.171158Z"
              fill="#FF5C5C"/>
          </g>
          <defs><clipPath id="clip0_0_273"><rect width="14" height="14" fill="white"/></clipPath></defs>
        </svg>
        <span class="info-element__value">Отклонено</span>
      </div>
    `
  }

  // approved (по умолчанию)
  return `
    <svg class="verify-element" width="18" height="18" viewBox="0 0 18 18" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_812)">
        <path d="M17.4819 7.79703L16.235 6.37129C15.9678 6.10396 15.7897 5.56931 15.7897 5.21287V3.78713C15.7897 2.80693 14.9881 2.09406 14.0975 2.09406H12.5835C12.2272 2.09406 11.6929 1.91584 11.4257 1.64851L10.0007 0.40099C9.37725 -0.133663 8.39757 -0.133663 7.77414 0.40099L6.43822 1.64851C6.17103 1.91584 5.63666 2.09406 5.28042 2.09406H3.76637C2.78669 2.09406 2.0742 2.89604 2.0742 3.78713V5.30198C2.0742 5.65842 1.89608 6.19307 1.62889 6.4604L0.47109 7.88614C-0.06328 8.5099 -0.06328 9.4901 0.47109 10.1139L1.62889 11.5396C1.89608 11.8069 2.0742 12.3416 2.0742 12.698V14.2129C2.0742 15.1931 2.87575 15.9059 3.76637 15.9059H5.28042C5.63666 15.9059 6.17103 16.0842 6.43822 16.3515L7.8632 17.599C8.48664 18.1337 9.46631 18.1337 10.0897 17.599L11.5147 16.3515C11.7819 16.0842 12.3163 15.9059 12.6725 15.9059H14.1866C15.1663 15.9059 15.8788 15.104 15.8788 14.2129V12.698C15.8788 12.3416 16.0569 11.8069 16.3241 11.5396L17.5709 10.1139C18.0162 9.4901 18.0162 8.42079 17.4819 7.79703ZM12.6725 7.26238L8.39757 11.5396C8.30851 11.6287 8.13039 11.7178 7.95227 11.7178C7.77414 11.7178 7.59602 11.6287 7.50696 11.5396L5.36948 9.40099C5.10229 9.13366 5.10229 8.68812 5.36948 8.42079C5.63666 8.15347 6.08197 8.15347 6.34916 8.42079L8.04133 10.1139L11.6929 6.28218C11.96 6.01485 12.4053 6.01485 12.6725 6.28218C12.9397 6.5495 12.9397 6.99505 12.6725 7.26238Z"
          fill="#00D00E"/>
      </g>
      <defs><clipPath id="clip0_1_812"><rect width="18" height="18" fill="white"/></clipPath></defs>
    </svg>

    <button class="button share-btn" data-share-sound-id="${soundId}" type="button">
      <span class="button__caption">Отправить</span>
    </button>
  `
}

function renderUploadFootLeft(status) {
  if (status === 'rejected') {
    return `<div class="info-element"><span class="info-element__value">Не прошло проверку</span></div>`
  }
  // pending/approved: слева остаётся views как обычно (ничего не добавляем)
  return ''
}

function setContext(nextCtx) {
  if (!nextCtx || nextCtx === soundState.context) return

  soundState.context = nextCtx
  soundState.page = 1
  soundState.hasNext = true

  const list = getSoundListEl(nextCtx)
  if (list) list.innerHTML = ''

  fetchSounds(true)
}

function renderCategories() {
  const lists = document.querySelectorAll('.dropdown-list.selection-list')

  lists.forEach((list) => {
    list.innerHTML = ''

    Object.entries(AUDIO_CATEGORIES).forEach(([key, label]) => {
      const li = document.createElement('li')
      li.className = 'dropdown-list__item'

      li.innerHTML = `
        <label class="checkbox">
          <input
            type="checkbox"
            class="checkbox__input selection-list__element"
            data-category="${key}"
          />
          <span class="checkbox__caption">${label}</span>
          <div class="checkbox__emulate"></div>
        </label>
      `

      list.appendChild(li)
    })

    // просто реагируем на выбор
    list.addEventListener('change', () => {
      const checked = Array.from(
        list.querySelectorAll('.selection-list__element:checked'),
      )

      let selected = checked.map((el) => el.dataset.category)

      // "all" = сброс фильтра
      if (selected.includes('all')) {
        // оставляем только all визуально (или вообще снимаем все — как хочешь)
        checked.forEach((el) => {
          if (el.dataset.category !== 'all') el.checked = false
        })
        selected = []
      } else {
        // если выбрали что-то кроме all — снимаем all
        const allEl = list.querySelector(
          '.selection-list__element[data-category="all"]',
        )
        if (allEl) allEl.checked = false
      }

      // ВАЖНО: в стейт кладём строку или null
      soundState.categories = selected.length ? selected.join(',') : null

      fetchSounds(true)
    })
  })
}

async function shareVoiceLikeSounds(soundId) {
  const tg = window.Telegram.WebApp

  const userId = tg.initDataUnsafe?.user?.id
  if (!userId) {
    alert('Открой мини-апп внутри Telegram')
    return
  }

  let prepared_message_id

  try {
    const data = await apiFetch(
      `/api/sounds/share/${encodeURIComponent(soundId)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${tg.initData}`,
        },
      },
    )

    prepared_message_id = data.prepared_message_id
  } catch (err) {
    alert(err.message)
    console.error('Share prepare failed', err)
    return
  }

  // нативный Share Message (как на скрине)
  tg.shareMessage(prepared_message_id, (sent) => {
    console.log('sent?', sent)
  })
}

function applyTelegramThemeClass() {
  if (!tg) return

  const isDark = tg.colorScheme === 'dark'

  document.documentElement.classList.toggle('dark-theme', isDark)
}

function resetPublishForm() {
  selectedAudioFile = null
  selectedEmoji = ''

  const fileInput = document.querySelector('.add-file-element__input')
  if (fileInput) fileInput.value = ''

  const titleInput = document.querySelector('input[placeholder="Название"]')
  if (titleInput) titleInput.value = ''

  const catTrigger = document.querySelector('.form-dropdown .dropdown__trigger')
  if (catTrigger) {
    catTrigger.textContent = 'Категории'
    delete catTrigger.dataset.value
    catTrigger.classList.remove('is-choice')
  }

  const emojiSelector = document.querySelector('.emoji-selector')
  if (emojiSelector) {
    emojiSelector.classList.remove('is-selected')
    const selected = emojiSelector.querySelector('.emoji-selector__selected')
    if (selected) selected.textContent = ''
  }

  const wrapper = document.querySelector('.file-upload')
  if (wrapper) {
    wrapper.classList.remove('has-uploading', 'is-upload')
  }
}

function goToPopularTab() {
  // закрываем форму
  document.querySelector('.page--form')?.classList.remove('page--show')
  document.querySelector('.page--main')?.classList.add('page--show')

  document.querySelector('[data-open-sounds="popular"]')?.click()
}

async function publishVoice() {
  const titleInput = document.querySelector('input[placeholder="Название"]')

  const file = selectedAudioFile
  const title = (titleInput?.value || '').trim()

  const catTrigger = document.querySelector('.form-dropdown .dropdown__trigger')
  const category =
    catTrigger?.dataset?.value || (catTrigger?.textContent || '').trim()

  if (!file) return alert('Выбери файл (звук)')
  if (!title) return alert('Введи название')
  if (!category || category === 'Категории') return alert('Выбери категорию')

  const fd = new FormData()

  fd.append('file', file, file.name)
  fd.append('title', title)
  fd.append('category_id', category)

  if (selectedEmoji) {
    fd.append('emoji', selectedEmoji)
  }

  try {
    const created = await apiFetch('/api/sounds/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tg.initData}`,
      },
      body: fd, // FormData
    })

    console.log('Published:', created)
    alert('Спасибо!\nЗвук отправлен на модерацию')

    resetPublishForm()
    goToPopularTab()
  } catch (err) {
    console.error('Publish failed:', err)
    alert(err.message)
  }
}

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
    selectedEmoji = emoji

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

function init_audioplayer() {
  let audio = null
  let audioUrl = null
  let playHandler = null
  let reloadHandler = null
  let deleteHandler = null
  let timeUpdateHandler = null
  let totalTime = 0

  const wrapper = document.querySelector('.file-upload')
  const input = wrapper.querySelector('.file-upload__field-input')

  const player = wrapper.querySelector('.player')
  const playButton = player.querySelector('.player__button-play')
  const reloadButton = player.querySelector('.player__button-reload')
  const deleteButton = player.querySelector('.player__button-delete')
  const currentDurationEl = player.querySelector('.player__duration-current')
  const totalDurationEl = player.querySelector('.player__duration-total')
  const sizeEl = player.querySelector('.player__size')

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

    selectedAudioFile = file

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

function initUploadCategories() {
  const uploadList = document.getElementById('upload-category-list')
  const uploadTrigger = document.querySelector(
    '.form-dropdown .dropdown__trigger',
  )

  if (!uploadList || !uploadTrigger) return

  uploadList.innerHTML = ''

  Object.entries(AUDIO_CATEGORIES).forEach(([key, name]) => {
    if (key === 'all') return

    uploadList.innerHTML += `
      <li class="dropdown-list__item">
        <button class="dropdown__select-item dropdown-list__button" type="button" data-value="${key}">
          ${name}
        </button>
      </li>
    `
  })

  uploadList.onclick = (e) => {
    const btn = e.target.closest('button')
    if (!btn) return

    uploadTrigger.textContent = btn.textContent
    uploadTrigger.dataset.value = btn.dataset.value

    uploadTrigger.closest('.dropdown')?.classList.remove('is-active')
  }
}

function enableHapticFeedback(parentOrParents, selector, pattern = 60) {
  if (!parentOrParents) return

  // Normalize parents to an array of Elements
  const parents = Array.isArray(parentOrParents)
    ? parentOrParents
    : parentOrParents instanceof NodeList ||
        parentOrParents instanceof HTMLCollection
      ? Array.from(parentOrParents)
      : [parentOrParents]

  // Lazy init of the Telegram WebApp once overall
  if (!enableHapticFeedback._telegramInitialized && window.Telegram?.WebApp) {
    try {
      Telegram.WebApp.ready()
      enableHapticFeedback._telegramInitialized = true
    } catch (e) {
      console.warn('Telegram WebApp init failed:', e)
    }
  }

  // Keep track of which (parent, selector) pairs we've already attached to
  if (!enableHapticFeedback._attached)
    enableHapticFeedback._attached = new WeakMap()

  const isAndroid = /android/i.test(navigator.userAgent || '')
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || '')

  parents.forEach((parent) => {
    if (!parent || !(parent instanceof Element)) return

    let attachedSet = enableHapticFeedback._attached.get(parent)
    if (!attachedSet) {
      attachedSet = new Set()
      enableHapticFeedback._attached.set(parent, attachedSet)
    }
    const attachedKey = String(selector)
    if (attachedSet.has(attachedKey)) {
      // уже подключено для этого parent+selector — пропускаем
      return
    }
    attachedSet.add(attachedKey)

    // Locks are per-parent+selector so rapid events on one container don't affect others
    let vibrateLocked = false
    let visualLocked = false

    const vibrateHandler = (e) => {
      const el = e.target.closest(selector)
      if (!el || !parent.contains(el)) return
      if (vibrateLocked) return
      vibrateLocked = true
      setTimeout(() => (vibrateLocked = false), 80)

      if (isAndroid) {
        if (navigator.vibrate) {
          navigator.vibrate(pattern)
        } else if (window.Telegram?.WebApp?.HapticFeedback) {
          Telegram.WebApp.HapticFeedback.impactOccurred('light')
        }
      } else if (isIOS) {
        if (window.Telegram?.WebApp?.HapticFeedback) {
          Telegram.WebApp.HapticFeedback.impactOccurred('light')
        } else if (navigator.vibrate) {
          navigator.vibrate(pattern)
        }
      } else {
        if (window.Telegram?.WebApp?.HapticFeedback) {
          Telegram.WebApp.HapticFeedback.impactOccurred('light')
        } else if (navigator.vibrate) {
          navigator.vibrate(pattern)
        }
      }
    }

    const visualHandler = (e) => {
      const el = e.target.closest(selector)
      if (!el || !parent.contains(el)) return
      if (visualLocked) return
      visualLocked = true

      el.classList.add('haptic-pressed')
      setTimeout(() => {
        el.classList.remove('haptic-pressed')
        visualLocked = false
      }, 120)
    }

    parent.addEventListener('pointerdown', vibrateHandler, { passive: true })
    parent.addEventListener('click', visualHandler, { passive: true })
  })
}

function showSkeleton(list, count = 6) {
  // рисуем "пустые" карточки, но с нужным классом loading
  list.innerHTML = Array.from({ length: count })
    .map(
      () => `
    <li class="sound-block__item" data-skeleton="1">
      <div class="sound-card loading">
        <div class="sound-card__skeleton">
          <div class="sound-card__top">
            <div class="sound-card__skeleton-button is-skeleton"></div>
            <div class="sound-card__skeleton-top-text">
              <div class="sound-card__skeleton-title is-skeleton"></div>
              <div class="sound-card__skeleton-category is-skeleton"></div>
            </div>
          </div>
          <div class="sound-card__skeleton-foot sound-card__foot">
            <div class="sound-card__skeleton-foot-left is-skeleton"></div>
            <div class="sound-card__skeleton-foot-right is-skeleton"></div>
          </div>
        </div>
        <div class="sound-card__real"></div>
      </div>
    </li>
  `,
    )
    .join('')
}

function hideSkeleton(list) {
  list.querySelectorAll('[data-skeleton="1"]').forEach((el) => el.remove())
}

function appendSkeleton(list, count = 3) {
  // если уже есть скелеты — не дублим
  if (list.querySelector('[data-skeleton="1"]')) return

  const html = Array.from({ length: count })
    .map(
      () => `
    <li class="sound-block__item" data-skeleton="1">
      <div class="sound-card loading">
        <div class="sound-card__skeleton">
          <div class="sound-card__top">
            <div class="sound-card__skeleton-button is-skeleton"></div>
            <div class="sound-card__skeleton-top-text">
              <div class="sound-card__skeleton-title is-skeleton"></div>
              <div class="sound-card__skeleton-category is-skeleton"></div>
            </div>
          </div>
          <div class="sound-card__skeleton-foot sound-card__foot">
            <div class="sound-card__skeleton-foot-left is-skeleton"></div>
            <div class="sound-card__skeleton-foot-right is-skeleton"></div>
          </div>
        </div>
        <div class="sound-card__real"></div>
      </div>
    </li>
  `,
    )
    .join('')

  list.insertAdjacentHTML('beforeend', html)
}


async function fetchAction() {
  if (fetchActionOncePromise) return fetchActionOncePromise

  fetchActionOncePromise = apiFetch(API_TRACKER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tg.initData}`,
    },
  })

  return fetchActionOncePromise
}
