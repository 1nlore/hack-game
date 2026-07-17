<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Разрешаем использование JSON и CORS
app.use(cors());
app.use(express.json());

// Раздаем статические файлы (чтобы сервер видел твой index.html)
app.use(express.static(path.join(__dirname)));

// Маршрут для главной страницы - открывает index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Твой API для взлома
app.post('/api/hack', (req, res) => {
    // Генерируем случайную мощность
    const newPower = Math.floor(Math.random() * 100);
    res.json({ success: true, power: newPower });
});

// Настройка порта (Render сам подставит свой порт, или будет 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер успешно запущен на порту ${port}`);
});
=======
const fs = require('fs'); // Подключаем модуль для работы с файлами
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Хранилище: игроки и очки кланов
let players = { 'user1': { clan: 'Хакеры' }, 'user2': { clan: 'Админы' } };
let clans = { 'Хакеры': 0, 'Админы': 0 };

// Получение состояния игры
app.get('/api/stats', (req, res) => {
    res.json({ clans });
});

// Клик
app.post('/api/hack', (req, res) => {
    const { userId } = req.body;
    const player = players[userId] || { clan: 'Хакеры' };
    clans[player.clan] += 1;
    res.json({ success: true, clanPower: clans[player.clan] });
});

app.listen(3000, () => console.log('Сервер запущен'));
>>>>>>> d66fecfc1b5487fea624defbd55507a5373288e9
