import { app } from './app';
import { initDB } from './database';
import { loadEnv } from './utils/load-env';

const PORT = 3000;

loadEnv();

console.log(process.env.PORT);

initDB()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error: unknown) => {
    console.error('Failed to connect to DB');
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log('Server is running on PORT 3000');
});
