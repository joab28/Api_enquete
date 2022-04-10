import { httpRequest, httpResponse } from '../protocols/http'
import { MissingParamsError } from '../error/missing-params-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  hundle (httpRequest: httpRequest): httpResponse | undefined {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamsError(field))
      }
    }
  }
}
