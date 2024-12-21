const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const app = express();

app.use(bodyParser.json());

// Endpoint to run the R script
app.post("/run-r-script", (req, res) => {
    exec("Rscript backend/api.R", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
