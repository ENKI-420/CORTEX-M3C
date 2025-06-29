const request = require('supertest');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Setup a minimal server for testing
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.json());
app.post('/api/text', (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) {
    return res.status(400).json({ error: 'user and text required' });
  }
  res.status(201).json({ user, text });
});

test('POST /api/text should return 201', async () => {
  await request(app)
    .post('/api/text')
    .send({ user: 'test', text: 'hello' })
    .expect(201);
});
