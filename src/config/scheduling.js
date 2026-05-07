/**
 * Google Calendar appointment booking URL (default: AEKS public booking page).
 * Override with VITE_GOOGLE_CALENDAR_BOOKING_URL in `.env` if the link changes.
 */
const DEFAULT_BOOKING_URL = 'https://calendar.app.google/pPLVTy9p4ATrREfW6'

export const GOOGLE_CALENDAR_BOOKING_URL =
  (import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL || '').trim() || DEFAULT_BOOKING_URL
