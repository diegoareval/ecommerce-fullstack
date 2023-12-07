import { authFetch, ENV } from '@/utils'

export class Address {
  async getAddress(userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}?filters[user][id][$eq]=${userId}`

      const response = await authFetch(url)
      const result = response.json()
      if (response.status != 200) throw result
      return result
    } catch (error) {
      throw error
    }
  }

  async updateAddress(addressId, data = {}) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}/${addressId}`
      const params = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
      }

      const response = await authFetch(url, params)
      const result = response.json()
      if (response.status != 200) throw result
      return result
    } catch (error) {
      throw error
    }
  }

  async removeAddress(addressId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}/${addressId}`
      const params = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const response = await authFetch(url, params)
      const result = response.json()
      if (response.status != 200) throw result
      return result
    } catch (error) {
      throw error
    }
  }

  async createAddress(data = {}) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}`
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      }

      const response = await authFetch(url, params)
      const result = response.json()
      if (response.status != 200) throw result
      return result
    } catch (error) {
      throw error
    }
  }
}

export const addressInstance = new Address()
