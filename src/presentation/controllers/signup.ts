import { httpRequest, httpResponse } from '../protocols/http'
import { MissingParamsError } from '../error/missing-params-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  hundle (httpRequest: httpRequest): httpResponse | undefined {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamsError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamsError('email'))
    }
  }
}
