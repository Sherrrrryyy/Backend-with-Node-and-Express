const tasks = [
    {
        id: 1,
        title: "This is one"
    },
    {
        id: 2,
        title: "This is two"
    },
    {
        id: 3,
        title: "This is three"
    },
]



import express from 'express';
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send(tasks)
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