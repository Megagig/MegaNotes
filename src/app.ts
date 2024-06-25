//create a basic server with types
import http, { IncomingMessage, ServerResponse } from 'node:http';

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.write('Hello MegaNotes');
  res.end();
});

export { app };
