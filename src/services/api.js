import { API_BASE_URL } from '../utils/constants';

/**
 * Base API client with common configurations
 */
class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  /**
   * Get authentication token from localStorage
   */
  getAuthToken() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData.token;
    }
    return null;
  }

  /**
   * Build request headers
   */
  getHeaders(customHeaders = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders
    };

    const token = this.getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Make API request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: this.getHeaders(options.headers)
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'GET'
    });
  }

  /**
   * POST request
   */
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE'
    });
  }
}

// Create API client instance
const apiClient = new ApiClient();

// Authentication API
export const authApi = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  register: (userData) => apiClient.post('/auth/register', userData),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me')
};

// Booking API
export const bookingApi = {
  getAll: () => apiClient.get('/bookings'),
  getById: (id) => apiClient.get(`/bookings/${id}`),
  create: (bookingData) => apiClient.post('/bookings', bookingData),
  update: (id, updateData) => apiClient.put(`/bookings/${id}`, updateData),
  cancel: (id) => apiClient.delete(`/bookings/${id}`),
  getUserBookings: (userId) => apiClient.get(`/bookings/user/${userId}`)
};

// Package API
export const packageApi = {
  getAll: (params) => apiClient.get('/packages', { params }),
  getById: (id) => apiClient.get(`/packages/${id}`),
  getByType: (type) => apiClient.get(`/packages/type/${type}`)
};

// Contact API
export const contactApi = {
  send: (messageData) => apiClient.post('/contact', messageData)
};

// Export API client and all API modules
export default apiClient;

export {
  apiClient,
  authApi,
  bookingApi,
  packageApi,
  contactApi
};
