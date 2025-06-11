
const express = require('express');
const app = express();
app.use(express.json());

app.post('/submitassignment', (req, res) => res.send('Assignment submitted!'));
app.get('/viewassignment', (req, res) => res.send('Viewing assignment...'));
app.put('/editprofile', (req, res) => res.send('Profile edited!'));

app.listen(5000, () => console.log('Student service running on 5000'));
