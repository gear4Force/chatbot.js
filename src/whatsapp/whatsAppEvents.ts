import { Client } from "whatsapp-web.js";

export class WhatsAppEvents {
  static register(client: Client): void {
    client.on("ready", () => {
      console.log("Tudo certo! WhatsApp conectado.");
    });

    client.on("disconnected", () => {
      console.log(`CLIENTE DESCONECTADO`);
    });

    client.on("message", (message) => {
      console.log(`Mensagem recebida: ${message.body} de ${message.from}`);
    });
  }
}
