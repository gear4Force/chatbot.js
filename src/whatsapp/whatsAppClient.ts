import { Client } from "../../node_modules/whatsapp-web.js/index.js";

export class WhatsAppClient {
  private static client: Client;

  static getClient(): Client {
    if (!this.client) {
      this.client = new Client({
        puppeteer: { headless: true },
      });
    }
    return this.client;
  }

  static initialize(): void {
    const client = this.getClient();
    client.initialize();
  }
}
