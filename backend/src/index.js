const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use("/api/books", require("./routes/book.routes"));

app.listen(PORT, () => console.log(`Server in port ${PORT}`));
