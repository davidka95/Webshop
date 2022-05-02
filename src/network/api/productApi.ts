import {appConfig} from '../../config/config'
import {CreateProduct} from '../../model/dto/createProduct'
import {CreateProductResponse} from '../../model/dto/createProductResponse'
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

  create = async (product: CreateProduct) => {
    const reponse = await apiClient.post<CreateProductResponse>(
      'product',
      product,
    )
    return reponse.data
  }

  update = async (id: string, product: CreateProduct) => {
    const reponse = await apiClient.put<CreateProductResponse>(
      `product/${id}`,
      product,
    )
    return reponse.data
  }
}
