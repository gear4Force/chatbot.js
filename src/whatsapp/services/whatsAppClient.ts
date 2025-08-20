import { Client } from "whatsapp-web.js";

// essa classe tem só uma função:
// Criar uma instância do cliente WhatsApp.
export class WhatsAppClient {
  private static client: Client;

  // cria um cliente, se já tiver um: retorna o existente.
  // evita criar o monte de cliente e sobrecarregar memória
  static getClient(): Client {
    if (!this.client) {
      this.client = new Client({
        // você pode deixar headless false
        // assim abre uma página do chrome pra conectar
        puppeteer: { headless: false },
      });
    }
    return this.client;
  }

  // inicia com o cliente criado
  static initialize(): void {
    const client = this.getClient();
    client.initialize();
  }
}
