import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "cashie", // Unique app ID
  name: "Cashie",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
