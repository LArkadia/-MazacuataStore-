const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/v1", require("./routes/v1.routes"));

app.listen(PORT, () => console.log(`Server in port ${PORT}`));
