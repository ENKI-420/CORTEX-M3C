const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static('public'));

// In-memory store for demonstration
const messages = [];

// REST endpoint for text messages
app.post('/api/text', (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ error: 'user and text required' });
  }
  const msg = { user, text, timestamp: Date.now() };
  messages.push(msg);
  io.emit('text', msg);
  res.status(201).json(msg);
});

// WebSocket connection for real-time interactions
io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
