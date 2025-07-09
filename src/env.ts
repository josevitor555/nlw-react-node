// Import Zod for schema validation
import { z } from "zod";

// Define the environment variables schema with validation rules
const envSchema = z.object({
    PORT: z.coerce.number().default(3000), // Convert PORT to number, default to 3000 if not provided
});

// Parse and validate environment variables against the schema
export const env = envSchema.parse(process.env);
