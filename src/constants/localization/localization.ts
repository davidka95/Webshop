import LocalizedStrings from 'react-native-localization'
import {en} from './en'

export interface Language {
  tabs: {
    read: string
    create: string
  }
  errors: {
    load: string
  }
}

export let strings = new LocalizedStrings<Language>({
  en: en,
})
