const WebSocket = require("ws");

const wss = new WebSocket.Server({port:8082});

wss.on("connection", ws => {
    console.log("Novo cliente foi conectado");

    ws.on("message", data => {
        console.log("Cliente enviou: " + data);
    });

    ws.send("Bom dia, cliente");

    ws.on("close", () => {
        console.log("Cliente foi desconectado");
    });
});