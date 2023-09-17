const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router("data.json")
const middlew = jsonserver.defaults()
const port = 3500;
server.use(middlew)
server.use(router)
server.listen(port)
