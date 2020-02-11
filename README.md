# Test AOS
Auteur: Casanova Hugo

Ce repertoire ne comporte pas la lib React (node_module), avant de tester ce projet merci de bien vouloir insérer la lib à la racine ./  
Vous pouvez la récupérer en installant create-react-app, puis lancer "create-react-app tmp" et pour finir 
"cp -rf ./tmp/node_module <PATH_RACINE_REPERTOIRE_APP_AOS>"

### Data user

email           test@test.fr
password        mypassword

## Commande à effectuer depuis la racine ./

### Création d'un user dans la database

Commande init database          node ./api/initdb.js

### Start server React

Commande start server           npm start
Port                            3000

### Start server API

Commande start server           nodemon ./api/api.js
Port                            8080

### Start test

Commande start test             node ./tests/test.js
