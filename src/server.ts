// Import Fastify framework to create the HTTP server
import { fastify } from "fastify";

// Import functions and types for Zod validation integration
import {
    serializerCompiler, // Compiler for response serialization using Zod
    validatorCompiler,  // Compiler for request validation using Zod
    type ZodTypeProvider, // Type to provide Zod as the validator
} from "fastify-type-provider-zod";

// Import the CORS plugin for Fastify
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";

// Create the Fastify app and set Zod as the type provider
const app = fastify().withTypeProvider<ZodTypeProvider>();

// Configure CORS to allow requests from the frontend running on localhost:5173
app.register(fastifyCors, {
    origin: "http://localhost:5173"
});

// Set the serializer and validator compilers using Zod
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// Set the server port, using the PORT environment variable or 3000 as default
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Define health check
app.get("/health", ()=> {
    return "OK";
});

// Start the server and log a message when it is running
app.listen({ port: env.PORT });
