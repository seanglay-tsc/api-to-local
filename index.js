const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());

app.get("/printers", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:43111/printers", {
      timeout: 5000,
    });

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "Failed to reach local agent",
    });
  }
});

app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});