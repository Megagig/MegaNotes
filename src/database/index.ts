import path from 'node:path';
import url from 'node:url';
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

const dbName = 'sqlite.db';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//Access our database: Function that opens our database
//We use the open function from the sqlite package to open our database
//The open function takes an object with two properties: filename and driver
//The filename property is the path to our database file
//The driver property is the sqlite3.Database object
//The open function returns a promise that resolves to a Database object
//We use the path module to get the absolute path to our database file
//We use the __dirname variable to get the directory name of the current module
//We use the path.join method to join the directory name and the database file name
//We use the open function from the sqlite package to open our database

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function initDB(): Promise<
  Database<sqlite3.Database, sqlite3.Statement>
> {
  if (!db) {
    db = await open({
      filename: path.join(__dirname, dbName),
      driver: sqlite3.Database,
    });
  }
  return db;
}
//Close our database: Function that closes our database
//We use the close method on the Database object to close the database
//We export the closeDB function so we can import it in other files

export async function closeDB(): Promise<void> {
  if (db) {
    await db.close();
    db = null;
    console.log('Disconnected from DB.');
  }
}
