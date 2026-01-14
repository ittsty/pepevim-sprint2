const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// About API
app.get("/api/about", (req, res) => {
    res.json({
        name: "pepevimp",
        description: "This is the backend API for the pepevimp application.",
        version: "1.0.0"
    });
});
// Contact API
app.post("/contact", (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if(!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    res.json({
        success: true,
        received: { firstName, lastName, email, message }
    });
});

app.listen( 3000, () => {
    console.log("Server is running on http://localhost:3000");
});