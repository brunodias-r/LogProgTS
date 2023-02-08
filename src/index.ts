import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello, Wolrd. 3333`);
})

app.listen(3333);