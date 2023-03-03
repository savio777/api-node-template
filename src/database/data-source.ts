/* eslint-disable no-console */
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Exemplo } from '../app/exemplo/entities/exemplo.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sqlite',
  synchronize: false,
  logging: false,
  entities: [Exemplo],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'exemplo',
});

function initializeDataBase() {
  AppDataSource.initialize()
    .then(() => {
      if (process.env.NODE_ENV !== 'test') {
        console.log('\x1b[33m%s', '[Database]', 'Initialized', '\x1b[0m');
      }
    })
    .catch((error) => console.log(error));
}

initializeDataBase();

export { AppDataSource };
