# CORTEX-M3C

CORTEX-M3C (Collaborative Orchestration of Real-Time Expert eXchange) is a multi-model, multi-modal collaboration platform. This repository contains a reference implementation with a simple Express server and WebSocket interface.

## Features

- **Real-time messaging** using WebSockets.
- REST API for posting text messages.
- Minimal client application served from `public/index.html`.

This project is a starting point for building the AGENT mc3 system described in the feature overview.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm start
   ```

3. Open your browser at [http://localhost:3000](http://localhost:3000) to try the demo.

## Testing

Run unit tests with:

```bash
npm test
```
