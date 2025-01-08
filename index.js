

import express from 'express';
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello world of the backend")
})

app.listen(PORT, () => console.log("Server is running on PORT" + PORT));