import { serve } from "inngest/next";

import { checkBudgetAlert } from "@/lib/inngest/functions";
import { inngest } from "@/lib/inngest/client";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlert],
});
