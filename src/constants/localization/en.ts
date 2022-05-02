import {Language} from './localization'

export const en: Language = {
  tabs: {
    read: 'Read',
    create: 'Create',
  },
  errors: {
    load: 'Loading failed',
    attention: 'Attention',
  },
  productsScreen: {
    emptyList: 'Jelenleg nincs termék',
    newProduct: 'Új termék felvétele',
  },
  productForm: {
    name: 'Name',
    namePlaceholder: 'Harry Potter',
    nameEmpty: 'Name field is required',
    description: 'Description',
    descriptionPlaceholder:
      'When a letter arrives for unhappy but ordinary Harry Potter, a decade-old secret is revealed...',
    descriptionEmpty: 'Description field is required',
    quantity: 'Quantity',
    quantityPlaceholder: '12',
    quantityEmpty: 'Quantity field is required',
    checkFields: 'Please, check the input fields',
  },
  createProduct: {
    create: 'Create',
    createError: 'Product creation failed.',
  },
  editProduct: {
    title: 'Edit',
    edit: 'Edit',
    editError: 'Product update failed',
  },
}
