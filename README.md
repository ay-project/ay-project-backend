# projectAY-musical-broccoli

### Project description
This project is a card game in NodeJS. (See wiki for more infos)
Technologies used in this project include : Postgres, LevelDB, WebSockets, Docker and more.

#### Project Status
Infrastructure rework

### Installation
### Requirements 
- NodeJS installed
- Docker installed
- PostgreSQL database exists

#### Database Setup
1. Create `config.json` file in `/database/config`
2. Set config file with database connection informations (need to set up a database, Postgres was used but any sequelize compatible should work)
3. Create the database tables with : 
`sequelize db:migrate`
4. Create default database data by running the`generate.js` script in `/database/creationScripts`
`node generate.js all`


### Game set up 
1. In `/server_services`  run `docker up -d` to start game server
2. In `/consoleClient` run `docker up -d` to start console client 
3. Open favorite browser and access `http://localhost:8081/` 
