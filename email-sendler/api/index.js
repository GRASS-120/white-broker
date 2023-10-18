import express from 'express';
import bodyParser from 'body-parser';
import Mail from './mail.js';

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `https://белыйброкер.рф`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  }

app.use(bodyParser.json());
app.use(allowCrossDomain)

app.post('/api', async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    const { message } = req.body;
    return res.json({ result: await Mail.send(message) });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port: 3000');
});
