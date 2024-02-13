const express = require('express')
const app = express()
const { createProxyMiddleware, Filter, Options, RequestHandler } = require('http-proxy-middleware');
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})
  

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
  
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
  
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://www.example.org/api',
    changeOrigin: true,
  }),
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})