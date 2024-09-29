import { Ignitor } from '@adonisjs/core'
import { createServer } from 'https'
import { createCertificate } from 'pem'

createCertificate({ days: 1, selfSigned: true }, (error, keys) => {
  if (error) {
    return console.log(error)
  }

  const options = {
    key: keys.serviceKey,
    cert: keys.certificate,
  }

  new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer((handler) => {
      return createServer(options, handler)
    })
    .catch(console.error)
})
