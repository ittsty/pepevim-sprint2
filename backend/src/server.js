const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());


// Contact API - รับข้อมูล
app.post("/api/contact", (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields (firstName, lastName, email, message)."
            });
        }

        // Logging ข้อมูล (เก็บลง Database / Email)
        console.log("-----------------------------------------");
        console.log(`📩 New Message from: ${firstName} ${lastName}`);
        console.log(`📧 Email: ${email}`);
        console.log(`💬 Message: ${message}`);
        console.log("-----------------------------------------");

        // ตอบกลับไปยัง Frontend
        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully!",
            receivedData: { firstName, email }
        });
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
});

// --- Server Setup ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`✅ Ready to receive requests from http://localhost:5173`);
});