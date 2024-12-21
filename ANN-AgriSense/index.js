const express = require('express');
const cors = require('cors');
const app = express();

// Add CORS middleware with specific allowed origin
app.use(cors({
    //origin: 'https://agrisense-60035550612.development.catalystserverless.in', // Allow this domain

    // origin: [
    //     'https://agrisense-60035550612.development.catalystserverless.in',
    //     'http://127.0.0.1:5500'
    // ],

    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE' , 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Example route
app.get('/predict', (req, res) => {
    res.json({ message: 'Prediction successful!' });
});

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});





// const express = require("express");
// const bodyParser = require("body-parser");
// const { exec } = require("child_process");
// const app = express();

// app.use(bodyParser.json());

// // Endpoint to run the R script
// app.post("/run-r-script", (req, res) => {
//     exec("Rscript backend/api.R", (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Error: ${stderr}`);
//             return res.status(500).send(stderr);
//         }
//         res.send(stdout);
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
