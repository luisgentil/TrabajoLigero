import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI ;//|| "mongodb://127.0.0.1/viajes/nombramientos"; //"mongodb://127.0.0.1/notesdb"; //modifico el original localhost

// moddifico el nombre de la BD >> comienzo usando la de C:, que es viajes/nombramientos