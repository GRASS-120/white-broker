import express from 'express';
import bodyParser from 'body-parser';

import Mail from './mail.js';

const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');    
//     res.send(`Requested from ${req.hostname} : <h1>Hello World</h1>`)
// });

app.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    const { message } = req.body;
    return res.json({ result: await Mail.send(message) });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port: 3000');
});
