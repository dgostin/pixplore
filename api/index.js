const express = require("express");
// const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());

// Serve static files from the React frontend
// app.use(express.static(path.join(__dirname, "../client/dist")));

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.post("/api/data", (req, res) => {
  const queryData = req.body;
  // console.log("Data received from frontend:", queryData);
  const queryStr =
    "q=" +
    queryData?.term +
    "&image_type=" +
    queryData?.image_type +
    "&orientation=" +
    queryData?.orientation +
    "&category=" +
    queryData?.category +
    "&min_width=" +
    queryData?.min_width +
    "&min_height=" +
    queryData?.min_height +
    "&colors=" +
    queryData?.colors +
    "&editors_choice=" +
    queryData?.editors_choice +
    "&order=" +
    queryData?.order;

  const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&${queryStr}&pretty=true&per_page=30`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.hits);
      res.json(data.hits);
    })
    .catch((err) => console.log(err));
});

// All other requests serve the frontend
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
