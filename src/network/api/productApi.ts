import {appConfig} from '../../config/config'
import {Product} from '../../model/product'
import {apiClient} from '../apiClient'

export class ProductApi {
  constructor() {
    if (appConfig.useMock) {
      require('../mockApi/productApiMock')
    }
  }

  read = async () => {
    const response = await apiClient.get<Product[]>('product/read')
    return response.data
  }

  remove = async (id: string) => {
    await apiClient.delete(`product/${id}`)
  }
}
