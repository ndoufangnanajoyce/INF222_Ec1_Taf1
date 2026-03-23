const Article = require('../models/articleModel');

exports.createArticle = (req, res) => {
    const { title, content, author, category, tags } = req.body;
    Article.create({ title, content, author, category, tags }, (err, article) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        res.status(201).json({ message: 'Article created successfully', article });
    });
};

exports.getArticles = (req, res) => {
    const filters = {
        category: req.query.category,
        author: req.query.author,
        date: req.query.date
    };
    Article.getAll(filters, (err, articles) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        res.status(200).json(articles);
    });
};

exports.getArticleById = (req, res) => {
    const id = req.params.id;
    Article.getById(id, (err, article) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).json(article);
    });
};

exports.updateArticle = (req, res) => {
    const id = req.params.id;
    const { title, content, category, tags } = req.body;
    Article.update(id, { title, content, category, tags }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).json({ message: 'Article updated successfully' });
    });
};

exports.deleteArticle = (req, res) => {
    const id = req.params.id;
    Article.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).json({ message: 'Article deleted successfully' });
    });
};

exports.searchArticles = (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }
    Article.search(query, (err, articles) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error', details: err.message });
        }
        res.status(200).json(articles);
    });
};
