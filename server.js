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