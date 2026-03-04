/**
 * @file regex.js
 * @description Centralized regular expressions for application-wide data validation.
 */

export const REGEX = {
  // Letters only (first and last names)
  ALPHA_ONLY: /^[A-Za-z]+$/,

  // Standard email validation pattern
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // Requires at least one of these specific special characters
  PASSWORD_SPECIAL_CHAR: /[$%^&*]/,

  // Exactly 4 numeric digits (Postcode)
  NUMERIC_EXACT_4: /^\d{4}$/,

  // Exactly 8 numeric digits (Mobile number suffix)
  NUMERIC_EXACT_8: /^\d{8}$/,
}
