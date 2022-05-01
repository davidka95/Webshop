import {Axios} from 'axios'
import {appConfig} from '../config/config'
import * as AxiosLogger from 'axios-logger'

export const apiClient = new Axios({
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
