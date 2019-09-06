const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler()

app.prepare().then(()=>{
  const server = express();

  server.use(express.json());

  server.get("/_next/*", (req, res) => {
    handle(req, res);
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', req.query)
  })


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {

    if (err) throw err;
    console.log(`Listeing on PORT ${port}`);

  })
})