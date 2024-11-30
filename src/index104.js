import app from "./app.js";
// import { createAdminUser } from "./libs/createUser.js";
import "./database.js";

async function main() {
  // await createAdminUser();
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();


// Nada que cambiar. El adminUser no es necesario, pero tampoco estorba...creo.