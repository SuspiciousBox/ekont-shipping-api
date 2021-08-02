import express from "express";
import cors from "cors";
import cities from "./routes/cities";
import offices from "./routes/offices";
import streets from "./routes/streets";
import lables from "./routes/lables";

const app = express();

//Authentication Header for the API call
app.use((_req, res, next) => {
    res.setHeader('Authentication', 'Basic aWFzcC1kZXY6aWFzcC1kZXY=')
    next()
})

app.use(cors())
app.use(express.json())

//Routes
app.post("/cities", cities);
app.post("/offices", offices);
app.post("/streets", streets);
app.post("/lables", lables);


//Server configuration
app.listen(port, () => {
    console.log("Server Started on http://localhost:3000")
});
