import { apiFetch } from './apiFetch.js'

let DICT = {}
const API_LANG_URL = '/api/user/lang'

function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    el.textContent = DICT[key] ?? key
  })
}

function setLang(lang) {
  const code = (lang || 'en').slice(0, 2)

  fetch(`i18n/${code}.json`)
    .then(r => r.json())
    .then(dict => {
      DICT = dict
      applyI18n()
      document.documentElement.lang = code
    })
}

apiFetch(API_LANG_URL)
  .then(r => setLang(r.lang))
  .catch(() => setLang('en'))

function t(key) {
  return DICT[key] ?? key
}

export { setLang, applyI18n, t }
