import React from 'react'
import {createContext, useState} from 'react'
import {strings} from '../constants/localization/localization'
import {LoadStatus} from '../model/enum/loadStatus'
import {Product} from '../model/product'
import {ProductApi} from '../network/api/productApi'

interface ProductContextProps {
  getProducts: () => void
  remove: (id: string) => void
  products: Product[]
  loadStatus: LoadStatus
  error?: string
}

export const ProductContext = createContext<ProductContextProps>({
  getProducts: () => {},
  remove: () => {},
  products: [],
  loadStatus: LoadStatus.NONE,
  error: undefined,
})

const productApi = new ProductApi()

export const ProductProvider: React.FC = ({children}) => {
  const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.NONE)
  const [error, setError] = useState<string | undefined>(undefined)
  const [products, setProducts] = useState<Product[]>([])

  const getProducts = async () => {
    setLoadStatus(LoadStatus.LOADING)
    try {
      const products = await productApi.read()
      setProducts(products)
    } catch (error) {
      setProducts([])
      setError(strings.errors.load)
    }

    setLoadStatus(LoadStatus.LOADED)
  }

  const remove = async (id: string) => {
    try {
      await productApi.remove(id)
      setProducts(products.filter(p => p.id !== id))
    } catch (error) {
      // TODO:
    }
  }

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        remove,
        products,
        loadStatus,
        error,
      }}>
      {children}
    </ProductContext.Provider>
  )
}
