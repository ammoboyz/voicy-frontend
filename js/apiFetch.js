import { WARNING_MESSAGES } from "../constants/warnings.js";
import { t } from './i18n.js'

export async function apiFetch(url, options = {}) {
  const headers = { ...(options.headers || {}) };

  const isFormData =
    typeof FormData !== "undefined" && options.body instanceof FormData;

  if (!isFormData && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    credentials: "include",
    ...options,
    headers,
  });

  if (response.ok) {
    if (response.status === 204) return null;
    return response.json();
  }

  let detail = null;
  try {
    const data = await response.json();
    detail = data?.detail;
  } catch {}

  const messageKey =
    (detail && WARNING_MESSAGES[detail]) ||
    WARNING_MESSAGES.UNKNOWN_ERROR;

  const message = t(messageKey);

  const error = new Error(message);
  error.status = response.status;
  error.detail = detail;
  throw error;
}
