const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  socketServer.on('connection', (socket) => { // socket is the client that just connected to the server
    socket.isAlive = true;

    // Forward messages to everyone except the sender
    socket.on('message', function message(data) {
      socketServer.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) { // checking to send to people who did not send the message and who can receive it
          client.send(data);
        }
      });
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true; // the server pings everyone, when client returns pong, you know they are still connected
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate(); // if they're not there, it will get rid of them

      client.isAlive = false; // turn them all to false
      client.ping(); // if they're still alive, they will turn it to true
    });
  }, 10000);
}

module.exports = { peerProxy };
