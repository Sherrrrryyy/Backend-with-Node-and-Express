// import catMe from 'cat-me';
import express from "express";
import morgan from "morgan"; //middleware
import connection from "./config/db.js";
import userModel from "./models/user.js";

const app = express();
const PORT = 4000;

app.set("view engine", "ejs"); //isplay html
app.use(morgan("dev")); //3rd party middleware
app.use(express.json()); // built in  middleware to parse json data
app.use(express.urlencoded({ extended: true })); // built in middleware to parse url encoded data
app.use(express.static("public")); // built in middleware to serve static files like css , images ,etc

//custom middleware
// app.use((req,res,next)=>{

//     const a = 2;
//     const b = 3;
//     console.log(a + b);

//     return next()
// })

app.get("/", (req, res) => {
  res.render("index");
});

//render with index.ejs view engine
// app.get(
//   "/",
//   (req, res, next) => {
//     const a = 10;
//     const b = 5;
//     console.log("Sum is: " + (a + b));
//     next();
//   },
//   (req, res) => {
//     res.render("index");
//   }
// );

// app.get(
//   "/",
//   (req, res, next) => {
//     const user = false;
//     if (user) {
//       next();
//     } else {
//       res.send("Please login to continue");
//     }
//   },
//   (req, res) => {
//     res.render("index");
//   }
// );

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

//use for sending data from frontend to backend
// In the post method data will not coming in req.query instead it will come in req.body
app.post("/get-user-data", (req, res) => {
  console.log(req.body);
  res.send("data has been received");
});

//use for sending data from server to frontend
// app.get('/get-user-data',(req,res)=>{
// console.log(req.query);
// res.send("data has been received")
// })

// Create operation
// to show the register page
app.get("/register", (req, res) => {
  res.render("register");
});

// to get data from the register page
app.post("/register", async (req, res) => {
  //data destructure krengy
  const { username, email, userPass } = req.body;

  //naya user create krengy model ki help se
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: userPass,
  });

  // isse ham rowser pe data read kr skte hai
  res.send(newUser);
});

// Read operation with the help of find method we can read our data in the rowser
// usermodel used with every operation related to the user
// In the find method we also put condition to get the speciffic user if we didn't put any condition find print all users
app.get("/get-users", (req, res) => {
  userModel
    .find({
      username: "c",
    })
    .then((users) => {
      res.send(users);
    });
});

// Update operation
// to update user we use findOneAndUpdate method
app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    {
      username: "c",
    },
    {
      email: "z@z.com",
    }
  );

  res.send("user updated");
});

// Delete operation
// o delete the user we use findOneAndDelete method
app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    username: "a",
  });
  res.send("user deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
