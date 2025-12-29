import { apiFetch } from './apiFetch.js'

let I18N_DICT = {}
const API_LANG_URL = '/api/user/lang'
const tg = window.Telegram?.WebApp

function applyI18n(root = document) {
  document.body.setAttribute('aria-busy', 'true')

  const els = root.querySelectorAll('[data-i18n]')

  els.forEach((el) => {
    const key = el.dataset.i18n
    const value = I18N_DICT[key]

    if (!value) {
      console.warn(`Missing i18n key: ${key}`)
      return
    }

    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = value
    } else {
      el.textContent = value
    }
  })

  requestAnimationFrame(() => {
    document.body.classList.add('i18n-ready')
    document.body.removeAttribute('aria-busy')
  })
}

function setLang(lang) {
  const code = (lang || 'en').slice(0, 2)

  apiFetch(`i18n/${code}.json`).then((dict) => {
    I18N_DICT = dict
    applyI18n()
    document.documentElement.lang = code
  })
}

apiFetch(API_LANG_URL, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${tg.initData}`,
  },
})
  .then((r) => setLang(r.language))
  .catch(() => setLang('ru'))

function t(key) {
  return I18N_DICT[key] ?? ''
}

export { setLang, applyI18n, t }
