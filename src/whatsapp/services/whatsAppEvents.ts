import { Client } from "whatsapp-web.js";

// Classe de eventos do Cliente do Whatsapp.
// Coisas como o status do cliente são criados.
// Aqui não é pra fazer método e lógicas de funil de mensagem.
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
