
import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import formData from 'express-form-data'

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(formData.parse());

    // Your Express.js routes go here

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
