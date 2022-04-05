import { SignUpController } from './signup'
describe('SignUp Controller', () => {
  test('Should retrun 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_email',
        email: 'any_email@gmail.com',
        passowrd: 'any_password',
        passowrdConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.hundle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
