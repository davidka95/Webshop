import LocalizedStrings from 'react-native-localization'
import {en} from './en'

export interface Language {
  tabs: {
    read: string
    create: string
  }
  errors: {
    load: string
    attention: string
  }
  productsScreen: {
    emptyList: string
    newProduct: string
  }
  productForm: {
    name: string
    namePlaceholder: string
    nameEmpty: string
    description: string
    descriptionPlaceholder: string
    descriptionEmpty: string
    quantity: string
    quantityPlaceholder: string
    quantityEmpty: string
    checkFields: string
  }
  createProduct: {
    create: string
    createError: string
  }
  editProduct: {
    title: string
    edit: string
    editError: string
  }
}

export let strings = new LocalizedStrings<Language>({
  en: en,
})
