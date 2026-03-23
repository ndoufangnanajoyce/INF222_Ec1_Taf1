```markdown # Blog API
API REST pour la gestion d'un blog simple développée avec Node.js et Express.
## Installation
```bash
git clone [URL_DU_REPO] cd blog-api npm install
npm start
```
## Endpoints disponibles
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/articles | Liste tous les articles |
| GET | /api/articles/:id | Récupère un article spécifique |
| POST | /api/articles | Crée un nouvel article |
| PUT | /api/articles/:id | Modifie un article existant |
| DELETE | /api/articles/:id | Supprime un article |
| GET | /api/articles/search | Recherche dans les articles |
## Documentation Swagger
Accéder à http://localhost:3000/api-docs pour tester l'API.
## Exemples d'utilisation ### Créer un article
```bash
curl -X POST http://localhost:3000/api/articles \
-H "Content-Type: application/json" \
-d '{"titre":"Mon premier article","contenu":"Contenu...","auteur":"Nana","categorie":"Tech"}'
```
### Rechercher des articles
```bash
curl "http://localhost:3000/api/articles/search?query=tech"
```
```
---
## PARTIE 3 : ANALYSE CRITIQUE
### Critiques de la plateforme CleeRoute
**Points forts :**

-	Personnalisation du parcours d'apprentissage
-	Assistant IA intégré
-	Structure progressive des modules
-	Quiz d'évaluation réguliers
**Points à améliorer :**
-	Plus d'exercices pratiques interactifs
-	 Intégration directe d'un environnement de code
### Critiques de l'implémentation technique
**Améliorations possibles de l'API :**
-	Ajout d'une authentification JWT
-	Pagination des résultats
-	Upload d'images pour les articles
-	Cache avec Redis
-	Tests unitaires avec Jest
**Apprentissages clés :**
-	Importance de la validation des entrées
-	Nécessité d'une documentation claire
-	Structuration modulaire du code
---
## CONCLUSION
Ce TAF 1 a permis de combiner théorie et pratique dans l'apprentissage du développement backend. À travers l'utilisation de CleeRoute, j'ai pu structurer mon apprentissage des concepts fondamentaux des API REST, puis les appliquer concrètement dans le développement d'une API de blog fonctionnelle.
**Bilan des compétences acquises :**
-	✓ Compréhension des architectures backend
-	✓ Maîtrise de Node.js et Express
-	✓ Création d'API RESTful avec CRUD complet
-	✓ Documentation d'API avec Swagger
-	✓ Validation des données et gestion des erreurs
-	✓ Utilisation d'outils d'apprentissage adaptatifs
**Perspectives :**
Ces bases solides en développement backend ouvrent la voie vers des concepts plus avancés : authentification OAuth, websockets temps réel, déploiement cloud, et architecture microservices.
---
## ANNEXES
### Annexe 1 : Code source complet
*[Le code source complet de l'application doit être fourni séparément ou via un lien vers le repository Git]*
### Annexe 2 : liste des fichiers du projet
• app. js - Configuration Express et middleware
• server. js - Point d'entrée et démarrage serveur
• config/database. js - Connexion SQLite
• controllers/articleController.js - Logique métier CRU
• models/articleModel.js - Requêtes SQL
routes/articleRoutes. js - Définition des routes
• middleware/validation.js - Validation express-validator
• swagger/swagger. json - Configuration OpenAPI
### Annexe 3 : Références
-	Documentation Express.js : https://expressjs.com/
-	Documentation SQLite : https://www.sqlite.org/docs.html
-	OpenAPI/Swagger Specification : https://swagger.io/specification/
-	CleeRoute : https://www.cleeroute.com/fr
---
