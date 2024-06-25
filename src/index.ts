import { app } from './app';
import { initDB } from './database';

const PORT = 3000;

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
