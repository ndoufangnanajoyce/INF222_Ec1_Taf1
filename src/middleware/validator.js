exports.validateArticle = (req, res, next) => {
    const { title, author, content } = req.body;
    
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Titre non vide' });
    }
    
    if (!author || author.trim() === '') {
        return res.status(400).json({ error: 'Auteur obligatoire' });
    }

    if (!content || content.trim() === '') {
        return res.status(400).json({ error: 'Contenu obligatoire' });
    }

    next();
};

exports.validateUpdate = (req, res, next) => {
    const { title, content } = req.body;
    
    if (title && title.trim() === '') {
        return res.status(400).json({ error: 'Titre ne peut pas être vide' });
    }

    if (content && content.trim() === '') {
        return res.status(400).json({ error: 'Contenu ne peut pas être vide' });
    }

    next();
};
