import { httpRequest, httpResponse } from './http'
export interface Controller {
  hundle: (httpRequest: httpRequest) => (httpResponse | undefined)
}
