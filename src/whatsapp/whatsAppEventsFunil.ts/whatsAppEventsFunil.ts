import { Client, List } from "whatsapp-web.js";

export class WhatsAppEventsFunil {
  static async funil(client: Client) {
    client.on("message", (message) => {
      if (message.body.includes("ajuda")) {
        message.reply("retorno teste ajuda");
      }
    });
  }
}
