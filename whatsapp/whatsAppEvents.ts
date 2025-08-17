import { Client } from "../node_modules/whatsapp-web.js/index.js";
import qrcode from "qrcode-terminal";

export class WhatsAppEvents {
  static register(client: Client): void {
    client.on("qr", (qr: string) => {
      qrcode.generate(qr, { small: true });
    });

    client.on("ready", () => {
      console.log("Tudo certo! WhatsApp conectado.");
    });

    client.on("message", (message) => {
      console.log(`Mensagem recebida: ${message.body}`);
    });
  }
}
