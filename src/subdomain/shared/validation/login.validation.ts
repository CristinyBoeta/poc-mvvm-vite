import { z } from "zod";

export type signinFormType = z.infer<typeof schema>;

export const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" }),
});
