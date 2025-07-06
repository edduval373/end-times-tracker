import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist/public')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'End Times Tracker API is running' });
});

// The "catchall" handler: send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
