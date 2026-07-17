const fs = require('fs'); // Подключаем модуль для работы с файлами
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// Эта строка разрешает серверу отдавать твой index.html
app.use(express.static(__dirname));

// Твой API для кликов
app.post('/api/hack', (req, res) => {
    // В будущем тут будет логика с файлом, пока просто тестовая мощноcть
    res.json({ success: true, power: Math.floor(Math.random() * 100) });
});

// Настройка порта для Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
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

const port = process.env.PORT || 3000; // Используй порт от Render, если он есть, иначе 3000
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});