import {defineConfig} from "drizzle-kit"
import { env } from "@/db/env";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },

  verbose: true,
  strict: true,
});