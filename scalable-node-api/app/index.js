const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Chamada de ${req.headers['user-agent']}`)
  for (let i = 0; i<=9999999; i++) {}
  res.write(`Hello World do pod ${process.env.HOSTNAME}`)
  res.end()
})

server.listen(process.env.PORT)
console.log(`Ouvindo na porta ${process.env.PORT}`)
