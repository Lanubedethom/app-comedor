import pkg from 'pg';
const { Pool } = pkg;
import { configure as config } from "../config/config.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
export const pool = new Pool({
    connectionString: URI
});

