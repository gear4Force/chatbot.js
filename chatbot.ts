import { WhatsAppClient } from "./whatsapp/whatsAppClient";
import { WhatsAppEvents } from "./whatsapp/whatsAppEvents";

const client = WhatsAppClient.getClient();

// Registra os eventos
WhatsAppEvents.register(client);

// Inicializa o client
WhatsAppClient.initialize();
