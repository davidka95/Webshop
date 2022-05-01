import Config from 'react-native-config'

interface AppConfig {
  baseUrl: string
  apiKey: string
  useMock: string
}

export const appConfig: AppConfig = {
  baseUrl: Config.BASE_URL,
  apiKey: Config.API_KEY,
  useMock: Config.USE_MOCK === 'true' ? true : false,
}
