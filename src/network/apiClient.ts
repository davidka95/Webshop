import axios from 'axios'
import {appConfig} from '../config/config'
import * as AxiosLogger from 'axios-logger'

export const apiClient = axios.create({
  baseURL: appConfig.baseUrl,
  headers: {
    'X-API-KEY': appConfig.apiKey,
  },
})

apiClient.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger,
)
apiClient.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger,
)
