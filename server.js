const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/hack', (req, res) => {
    res.json({ success: true, power: Math.floor(Math.random() * 100) });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

app.listen(3000, () => console.log('Сервер запущен'));
>>>>>>> d66fecfc1b5487fea624defbd55507a5373288e9
