import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()


app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    if (req.accepts('html')) {
        res.sendFile('index.html', { root: __dirname });
    } else {
        if (req.accepts('json')) {
            res.status
        }
    }
})
