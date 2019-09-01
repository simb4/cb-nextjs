const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/*
* in case your need custom server rendering
* scripts {
*   "dev": "node server/index.js",
*   "build": "next build",
*   "start": "NODE_ENV=production node server/index.js"
* }
* */

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    handle(req, res, parsedUrl)

    // if (pathname === '/almaty') {
    //   app.render(req, res, '/main', query)
    // } else if (pathname === '/main') {
    //   app.render(req, res, '/', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})