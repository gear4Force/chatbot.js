import { Client } from "whatsapp-web.js";

export class WhatsAppEventsFunil {
  static async funil(client: Client) {
    //esse funil responde a mensagem que alguem envia com "ajuda"
    //fiz pra teste -
    client.on("message", (message) => {
      if (message.body.includes("ajuda")) {
        message.reply("retorno teste ajuda");
      }
    });
  }
}
