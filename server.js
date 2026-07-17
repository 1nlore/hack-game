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