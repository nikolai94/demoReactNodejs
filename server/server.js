import express from 'express';
import config from './config';
const server = express();


server.get('/', (req, res) => {
    res.send(`test 1234567`);
});

//public folder. All files in the public can now be accessed, e.g. from the browser
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});


