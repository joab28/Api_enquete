import { Encrypter } from '../../data/protocols/encrypter'
import bcryper from 'bcrypt'
export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcryper.hash(value, this.salt)
    return hash
  }
}
