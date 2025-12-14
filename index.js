// import catMe from 'cat-me';
import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 4000;

app.set("view engine", "ejs");

//3rd party middleware
app.use(morgan("dev"));

//custom middleware

// app.use((req,res,next)=>{

//     const a = 2;
//     const b = 3;
//     console.log(a + b);

//     return next()
// })

//render with index.ejs view engine
app.get(
  "/",
  (req, res, next) => {
    const a = 10;
    const b = 5;
    console.log("Sum is: " + (a + b));
    next();
  },
  (req, res) => {
    res.render("index");
  }
);

//routes

// app.get('/',(req,res)=>{
// res.send("This is home page")
// })

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/profile", (req, res) => {
  res.send("Tis is profile page");
});

app.listen(PORT, () => console.log("Server is running on PORT" + PORT));

// console.log(catMe());
