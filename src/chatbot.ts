import { WhatsAppClient } from "./whatsapp/whatsAppClient";
import { WhatsAppEvents } from "./whatsapp/whatsAppEvents";
import { WhatsAppClientQrCode } from "./whatsapp/whatsAppClientQrCode";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;
const client = WhatsAppClient.getClient();

// Registra os eventos
WhatsAppEvents.register(client);

// Inicializa o client
WhatsAppClient.initialize();

// Rota que retorna o QR em HTML
// Precisa ser async pq createQrCode() retorna uma promise
// a var qrcode é o código qr em String, adapte da melhor forma
app.get("/", async (req: Request, res: Response) => {
  const qrcode = await WhatsAppClientQrCode.createQrCode(client);
  res.send(
    `
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator/qrcode.js"></script>
        <div id="qrcode"></div>
      <script>
      var qr = qrcode(0, 'L'); // versão automática, nível de correção L
      qr.addData("${qrcode}");
      qr.make();
      document.getElementById('qrcode').innerHTML = qr.createImgTag();
      </script>`
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
