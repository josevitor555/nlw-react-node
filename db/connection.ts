import posrtgres from "postgres";

// Make sure the env.ts file exists at the correct path and exports 'env'
import { env } from "../src/env.ts";

// Create a PostgreSQL connection pool using the connection string from environment variables
export const sql = posrtgres(env.DATABASE_URL);


// // Example usage of the connection pool
const result = await sql`SELECT 'Hello' as message`;
console.log(result); // Should log: [ { message: 'Hello' } ]
