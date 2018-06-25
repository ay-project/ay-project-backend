# projectAY-musical-broccoli

### Project description
This project is a card game in NodeJS. (See wiki for more infos)
Technologies used in this project include : Postgres, LevelDB, WebSockets and more.

#### Project Status
Currently on hold. 

### Installation
#### Node modules
Run `npm install`
#### Database
1. Create `config.json` file in `/database/config`
2. Set config file with database connection informations (need to set up a database, Postgres was used but any sequelize compatible should work)
3. Create the database tables with : 
`sequelize db:migrate`
4. Create default database data by running the`generate.js` script in `/database/creationScripts`


### Running procedure (dev environement) 
1. Run `node server_services/main_service/server.js`
2. Run `node clientServer.js`
3. Open `localhost:8000` in a browser
