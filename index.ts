import express from "express";
import cors from "cors";

//Routers
import cities from "./routes/cities";
import offices from "./routes/offices";
import streets from "./routes/streets";
import labels from "./routes/labels";

const PORT = process.env.PORT || 3000;
const app = express();

//Authentication Header for the API call
app.use((_req, res, next) => {
  res.setHeader("Authentication", "Basic aWFzcC1kZXY6aWFzcC1kZXY=");
  next();
});

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.post("/cities", cities);
app.post("/offices", offices);
app.post("/streets", streets);
app.post("/labels", labels);

//Server
app.listen(PORT, () => {
  console.log("App listening on port ${PORT}!");
});
