// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Application Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  OBLIGATION: '/obligation'
};

// Booking Status
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed'
};

// Package Types
export const PACKAGE_TYPES = {
  HAJJ: 'hajj',
  UMRAH: 'umrah'
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@mutawifnesia.com',
  PHONE: '+62 XXX XXX XXX',
  ADDRESS: 'Jakarta, Indonesia'
};

// Social Media Links
export const SOCIAL_MEDIA = {
  FACEBOOK: '#',
  INSTAGRAM: '#',
  TWITTER: '#',
  YOUTUBE: '#'
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  FULL: 'DD MMMM YYYY'
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[\d\s-()]+$/,
  MIN_PASSWORD_LENGTH: 8
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100]
};

export default {
  API_BASE_URL,
  ROUTES,
  BOOKING_STATUS,
  PACKAGE_TYPES,
  CONTACT_INFO,
  SOCIAL_MEDIA,
  DATE_FORMATS,
  VALIDATION,
  PAGINATION
};
