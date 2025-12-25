import { apiFetch } from './apiFetch.js'

let DICT = {}
const API_LANG_URL = '/api/user/lang'
const tg = window.Telegram?.WebApp

function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    el.textContent = DICT[key] ?? key
  })
}

function setLang(lang) {
  const code = (lang || 'en').slice(0, 2)

  apiFetch(`i18n/${code}.json`)
    .then(dict => {
      DICT = dict
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
  .then(r => setLang(r.language))
  .catch(() => setLang('ru'))

function t(key) {
  return DICT[key] ?? key
}

export { setLang, applyI18n, t }
