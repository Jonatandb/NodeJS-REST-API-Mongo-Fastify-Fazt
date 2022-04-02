require('dotenv').config()
const app = require('./app.js')({ logger: true, ignoreTrailingSlash: true })

const startServer = async () => {
  try {
    await app.listen(process.env.PORT)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

startServer()
