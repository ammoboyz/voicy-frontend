import { apiFetch } from './apiFetch.js'

let I18N_DICT = {}

let _i18nReadyResolve = null
const i18nReady = new Promise((resolve) => {
  _i18nReadyResolve = resolve
})
const API_LANG_URL = '/api/user/lang'
const tg = window.Telegram?.WebApp

function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = I18N_DICT[key] ?? key;

    if (
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement
    ) {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
}

function setLang(lang) {
  const code = (lang || 'en').slice(0, 2)

  return apiFetch(`i18n/${code}.json`)
    .then((dict) => {
      I18N_DICT = dict
      applyI18n()
      document.documentElement.lang = code
    })
    .catch(() => {
      // если словарь не загрузился — всё равно выставляем язык,
      // чтобы загрузка приложения не зависала
      I18N_DICT = {}
      applyI18n()
      document.documentElement.lang = code
    })
    .finally(() => {
      if (_i18nReadyResolve) {
        _i18nReadyResolve()
        _i18nReadyResolve = null
      }
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
  return I18N_DICT[key] ?? key
}

export { setLang, applyI18n, t, i18nReady }