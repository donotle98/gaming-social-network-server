const app = require('./app');
const server = require('http').createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Express is running on port ${PORT}!`));
