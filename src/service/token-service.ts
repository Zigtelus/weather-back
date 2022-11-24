const jwt = require('jsonwebtoken')
import { JwtService } from '@nestjs/jwt';

export class TokenService {


  generateToken(payload) {
    const accessToken = jwt.sign(payload, 'dwf-wqfde-qwf', {expiresIn: '2h'})
    const refreshToken = jwt.sign(payload, 'dwf-wqfde-qwf', {expiresIn: '20d'})

    return {
      accessToken,
      refreshToken
    }
  }
}