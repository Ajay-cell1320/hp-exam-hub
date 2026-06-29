const express = require('express');
const path = require('path');
const app = express();

// Server ka Port set kar rahe hain (Render ke liye zaroori hai)
const PORT = process.env.PORT || 3000;

// Public folder ki static files (HTML, CSS) ko serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// Jab koi main website open kare toh index.html dikhe
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server ko chalu karna
app.listen(PORT, () => {
    console.log(`HP Exam Hub is running perfectly on port ${PORT}`);
});
