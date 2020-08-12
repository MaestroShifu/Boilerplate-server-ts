# Server setup

## Setup 
- `npm install`
- `npm install -g ts-node`
- `npm i -g typeorm`

## Command BD data:
- `npm run db:migrate` Inicializa nuestra base de datos
- `npm run db:revert` Retrocede las migraciones
- `npm run db:show` Muestra las migraciones que se ejecutaron y las que no
- `npm run db:cache:clear` Limpia el cache de nuestra db
- `npm run migration:create [name]` Crea una nueva migracion
- `npm run subscriber:create [name]` Crea un subscriber
- `npm run entity:create [name]` Crea un entity

## Command Unit testing
- `npm run test` Sirve para correr los unit test
- `npm run test:debug` Ayuda a correr el debug dentro del test

### Run app:
```
    npm run start # Sirve para correr en produccion
    npm run start:dev # Sirve para correr un servidor en desarrollo
    npm run start:debug # Sirve para correr el manejo de depuracion
``` 

### Run build of app:
```
    npm run build
``` 