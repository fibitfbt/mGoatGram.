const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.WORLD_COIN_API_KEY || "your-api-key"; // Gantikan dengan API Key sebenar

app.use(cors());
app.use(express.json());

// Konfigurasi penyimpanan gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Simpan maklumat pengguna dalam memori sementara
let userProfiles = {};

// Middleware untuk pengesahan API Key
const authenticate = (req, res, next) => {
    const userApiKey = req.headers["x-api-key"];
    if (!userApiKey || userApiKey !== API_KEY) {
        return res.status(403).json({ success: false, message: "Unauthorized API Key" });
    }
    next();
};

// Muat naik gambar profil
app.post("/api/uploadProfilePic", authenticate, upload.single("profilePic"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ success: true, imageUrl });
});

// Simpan profil pengguna
app.post("/api/saveProfile", authenticate, (req, res) => {
    const { username, profilePic } = req.body;
    if (!username) {
        return res.status(400).json({ success: false, message: "Username is required" });
    }
    userProfiles[username] = { username, profilePic };
    res.json({ success: true, message: "Profile saved", data: userProfiles[username] });
});

// Dapatkan profil pengguna
app.get("/api/getProfile", authenticate, (req, res) => {
    const { username } = req.query;
    if (!username || !userProfiles[username]) {
        return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.json({ success: true, data: userProfiles[username] });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
