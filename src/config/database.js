const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            author TEXT NOT NULL,
            category TEXT,
            tags TEXT,
            date TEXT DEFAULT (datetime('now', 'localtime'))
        )
    `, (err) => {
        if (err) {
            console.error('Error creating articles table:', err.message);
        } else {
            console.log('Articles table ready.');
        }
    });
});

module.exports = db;
