import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/lib/db",
  out: "src/lib",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://joaopinto:@localhost:5432/gator",
  },
});