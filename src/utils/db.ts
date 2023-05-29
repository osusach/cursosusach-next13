import { createClient } from "@libsql/client";

export const database = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_AUTHTOKEN!,
});
