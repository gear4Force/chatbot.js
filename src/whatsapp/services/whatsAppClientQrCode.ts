import { Client } from "whatsapp-web.js";

export class WhatsAppClientQrCode {
  static createQrCode(client: Client): Promise<string> {
    return new Promise((resolve) => {
      client.on("qr", (qr: string) => {
        resolve(qr);
      });
    });
  }
}
