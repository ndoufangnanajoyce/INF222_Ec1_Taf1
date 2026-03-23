const db = require('../config/database');

const Article = {
    create: (article, callback) => {
        const { title, content, author, category, tags } = article;
        const sql = `INSERT INTO articles (title, content, author, category, tags) VALUES (?, ?, ?, ?, ?)`;
        db.run(sql, [title, content, author, category, tags], function(err) {
            callback(err, { id: this.lastID, ...article });
        });
    },

    getAll: (filters, callback) => {
        let sql = `SELECT * FROM articles WHERE 1=1`;
        const params = [];

        if (filters.category) {
            sql += ` AND category = ?`;
            params.push(filters.category);
        }
        if (filters.author) {
            sql += ` AND author = ?`;
            params.push(filters.author);
        }
        if (filters.date) {
            sql += ` AND date LIKE ?`;
            params.push(`${filters.date}%`);
        }

        db.all(sql, params, (err, rows) => {
            callback(err, rows);
        });
    },

    getById: (id, callback) => {
        const sql = `SELECT * FROM articles WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            callback(err, row);
        });
    },

    update: (id, article, callback) => {
        const { title, content, category, tags } = article;
        const sql = `UPDATE articles SET title = ?, content = ?, category = ?, tags = ? WHERE id = ?`;
        db.run(sql, [title, content, category, tags, id], function(err) {
            callback(err, { changes: this.changes });
        });
    },

    delete: (id, callback) => {
        const sql = `DELETE FROM articles WHERE id = ?`;
        db.run(sql, [id], function(err) {
            callback(err, { changes: this.changes });
        });
    },

    search: (query, callback) => {
        const sql = `SELECT * FROM articles WHERE title LIKE ? OR content LIKE ?`;
        const searchTerm = `%${query}%`;
        db.all(sql, [searchTerm, searchTerm], (err, rows) => {
            callback(err, rows);
        });
    }
};

module.exports = Article;
