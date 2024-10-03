const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

// Serve static files
app.use(express.static('public'));

// Route to serve the channel list as JSON
app.get('/api/channels', (req, res) => {
    const channelsPath = path.join(__dirname, 'channels.json');
    fs.readFile(channelsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading channels file');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        }
    });
});

// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`EPG web app running at http://localhost:${port}`);
});
