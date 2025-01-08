

import express from 'express';
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello world of the backend")
})

app.post('/', (req, res) => {
    // console.log(req);
    res.send("Post request has been called")
})

app.put('/', (req, res) => {
    // console.log(req);
    res.send("Put request has been called")
})

app.delete('/', (req, res) => {
    // console.log(req);
    res.send("Delete request has been called")
})

app.listen(PORT, () => console.log("Server is running on PORT" + PORT));