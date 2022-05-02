import React from 'react'
import {createContext, useState} from 'react'
import {strings} from '../constants/localization/localization'
import {CreateProduct} from '../model/dto/createProduct'
import {LoadStatus} from '../model/enum/loadStatus'
import {Product} from '../model/product'
import {ProductApi} from '../network/api/productApi'

interface ProductContextProps {
  getProducts: () => void
  remove: (id: string) => void
  addProduct: (product: CreateProduct) => Promise<boolean>
  updateProduct: (product: Product) => Promise<boolean>
  products: Product[]
  loadStatus: LoadStatus
  error?: string
  removeLoadStatus: LoadStatus
  createLoadStatus: LoadStatus
  updateLoadStatus: LoadStatus
}

export const ProductContext = createContext<ProductContextProps>({
  getProducts: () => {},
  remove: () => {},
  addProduct: async () => true,
  updateProduct: async () => true,
  products: [],
  loadStatus: LoadStatus.NONE,
  error: undefined,
  removeLoadStatus: LoadStatus.NONE,
  createLoadStatus: LoadStatus.NONE,
  updateLoadStatus: LoadStatus.NONE,
})

const productApi = new ProductApi()

export const ProductProvider: React.FC = ({children}) => {
  const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.NONE)
  const [error, setError] = useState<string | undefined>(undefined)
  const [products, setProducts] = useState<Product[]>([])
  const [removeLoadStatus, setRemoveLoadStatus] = useState<LoadStatus>(
    LoadStatus.NONE,
  )
  const [createLoadStatus, setCreateLoadStatus] = useState<LoadStatus>(
    LoadStatus.NONE,
  )
  const [updateLoadStatus, setUpdateLoadStatus] = useState<LoadStatus>(
    LoadStatus.NONE,
  )

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
    setRemoveLoadStatus(LoadStatus.LOADING)
    try {
      await productApi.remove(id)
      const filteredProducts = products.filter(p => p.id !== id)
      setProducts(filteredProducts)
    } catch (error) {
      // TODO:
    }

    setRemoveLoadStatus(LoadStatus.LOADED)
  }

  const addProduct = async (product: CreateProduct) => {
    setCreateLoadStatus(LoadStatus.LOADING)
    try {
      const response = await productApi.create(product)
      setProducts([{...product, ...response}, ...products])
      return true
    } catch (error) {
      return false
    } finally {
      setCreateLoadStatus(LoadStatus.LOADED)
    }
  }

  const updateProduct = async (product: Product) => {
    setUpdateLoadStatus(LoadStatus.LOADING)
    try {
      await productApi.update(product.id, product)
      const updatedProductIndex = products.findIndex(p => p.id === product.id)
      products[updatedProductIndex] = product
      setProducts([...products])
      return true
    } catch (error) {
      return false
    } finally {
      setUpdateLoadStatus(LoadStatus.LOADED)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        remove,
        addProduct,
        updateProduct,
        products,
        loadStatus,
        error,
        createLoadStatus,
        removeLoadStatus,
        updateLoadStatus,
      }}>
      {children}
    </ProductContext.Provider>
  )
}
