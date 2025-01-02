const express = require('express');
const path = require('path');
const isValidTime = require("./isValidTime")

const app = express();


app.use((req, res, next) => {
    if (!isValidTime) {
        res.status(403).send('This web application is only available during working hours: Monday to Friday, 9 AM to 5 PM.');
    } else {
        next();
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
