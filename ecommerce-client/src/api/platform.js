import { ENV } from "@/utils";

export class Platform {
    async getAll(){
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORMS}?populate=icon`
            const params = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
            const response = await fetch(url, params)
            const result = response.json()
            if (response.status != 200) throw result
            return result
        } catch (error) {
            throw error;
        }
    }
}

export const platform = new Platform();