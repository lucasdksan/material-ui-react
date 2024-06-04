import { z } from "zod";

const schema = z.object({
    VITE_PORT: z.string()
});

export const env = schema.parse(import.meta.env);