import { httpRequest, httpResponse } from '../protocols/http'
import { MissingParamsError } from '../error/missing-params-error'
export class SignUpController {
  hundle (httpRequest: httpRequest): httpResponse | undefined {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamsError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamsError('email')
      }
    }
  }
}
