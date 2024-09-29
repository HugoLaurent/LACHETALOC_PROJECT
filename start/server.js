const { Ignitor } = require('@adonisjs/ignitor')
const https = require('https')
const pem = require('pem')

pem.createCertificate({ days: 1, selfSigned: true }, (error, keys) => {
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
      return https.createServer(options, handler)
    })
    .catch(console.error)
})
