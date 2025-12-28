import { apiFetch } from './apiFetch.js'

let I18N_DICT = {}
const API_LANG_URL = '/api/user/lang'
const tg = window.Telegram?.WebApp

function applyI18n(root = document) {
  const els = Array.from(root.querySelectorAll('[data-i18n]'))

  els.forEach((el, i) => {
    const key = el.dataset.i18n
    const value = I18N_DICT[key] ?? key

    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = value
    } else {
      el.textContent = value
    }

    el.classList.add('i18n-fade')
    el.style.transitionDelay = `${i * 35}ms`
  })

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('i18n-ready')
      document.body.removeAttribute('aria-busy')
    })
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
  return I18N_DICT[key] ?? key
}

export { setLang, applyI18n, t }
