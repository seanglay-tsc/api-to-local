import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
