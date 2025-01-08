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
import morgan from 'morgan';
const app = express();
const PORT = 4000;


// application-level middleware
function middleware(req, res, next) {
    req.requestBy = "Shaheer Khan";
    next()
}
// app.use(middleware)
app.use(morgan('tiny'))


// Router-level middleware
app.get('/',middleware, (req, res) => {
    // console.log(req);
    console.log("request by=>", req.requestBy);
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