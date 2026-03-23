# Blog API - Gestion d'articles

Une API RESTful pour la gestion d'un blog, construite avec Node.js, Express et SQLite.

## Fonctionnalités

- **CRUD complet** : Créer, lire, mettre à jour et supprimer des articles.
- **Filtrage** : Récupérer des articles par catégorie, auteur ou date.
- **Recherche** : Rechercher des articles par titre ou contenu.
- **Documentation Swagger** : Interface interactive pour tester l'API.
- **Validation** : Validation des entrées utilisateur.

## Installation

1. Clonez le dépôt (ou téléchargez les fichiers).
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur :
   ```bash
   npm start
   ```
   Le serveur sera disponible sur `http://localhost:3000`.

## Documentation API

La documentation Swagger est disponible sur :
`http://localhost:3000/api-docs`

### Points de terminaison (Endpoints)

| Méthode | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/articles` | Créer un article |
| GET | `/api/articles` | Liste de tous les articles (filtres optionnels) |
| GET | `/api/articles/{id}` | Détails d'un article |
| PUT | `/api/articles/{id}` | Modifier un article |
| DELETE | `/api/articles/{id}` | Supprimer un article |
| GET | `/api/articles/search?query=...` | Rechercher des articles |

## Structure du projet

```
/
├── src/
│   ├── config/       # Configuration (DB, Swagger)
│   ├── controllers/  # Logique métier
│   ├── middleware/   # Validation
│   ├── models/       # Modèles de données (SQLite)
│   ├── routes/       # Définition des routes
│   └── app.js        # Entrée de l'application
├── public/           # Interface web (optionnel)
└── database.sqlite   # Fichier de base de données
```

## Technologies utilisées

- **Backend** : Node.js, Express
- **Base de données** : SQLite (via `sqlite3`)
- **Documentation** : Swagger (`swagger-ui-express`, `swagger-jsdoc`)
- **Utilitaires** : `cors`, `dotenv`, `body-parser`
