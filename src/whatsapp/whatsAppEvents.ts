import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";

export class WhatsAppEvents {
  private static lastQr: string | null = null;

  static register(client: Client): void {
    client.on("qr", (qr: string) => {
      this.lastQr = qr; // guarda o QR bruto
      qrcode.generate(qr, { small: true }); // ainda mostra no terminal
    });

    client.on("ready", () => {
      console.log("Tudo certo! WhatsApp conectado.");
    });

    client.on("message", (message) => {
      console.log(`Mensagem recebida: ${message.body}`);
    });
  }

  // Função para acessar o QR salvo
  static returnQrCode(): string | null {
    return this.lastQr;
  }
}
