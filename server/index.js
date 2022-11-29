import express from "express";
import cors from "cors"
import bodyParser from "body-parser"


const app = express();
const PORT =  8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/register', (req, res) => {
    res.status(200).json({ message: "Register Success!" })

    // Here write the registration code using SQL Database.
})

app.post('/login', (req, res) => {
    res.status(200).json({ message: "Login Success!" });

    // Here Verify the email and password from the database and if they match let the user login. 
})


app.listen(PORT, () => {
    console.log("listening on http://localhost:8000")
})