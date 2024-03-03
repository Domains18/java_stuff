import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    if (req.accepts('html')) {
        res.sendFile('index.html', { root: __dirname });
    } else {
        if (req.accepts('json')) {
            res.status(200).json("api is working")
        }
    }
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
