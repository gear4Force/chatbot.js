import { WhatsAppClient } from "./whatsapp/whatsAppClient.js";
import { WhatsAppEvents } from "./whatsapp/whatsAppEvents.js";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;
const client = WhatsAppClient.getClient();

// Registra os eventos
WhatsAppEvents.register(client);

// Inicializa o client
WhatsAppClient.initialize();

// Rota que retorna o QR em HTML
app.get("/", (_req: Request, res: Response) => {
  const qr = WhatsAppEvents.returnQrCode();

  if (!qr) {
    res.send("<h2>Aguardando QR Code...</h2>");
    return;
  }

  res.send(`
    <html>
      <body>
        <h2>Escaneie o QR Code abaixo:</h2>
        <img src="data:image/png;base64,${qr}" />
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
