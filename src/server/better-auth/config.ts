import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { db } from "@/server/db";
import { isSetupComplete } from "@/server/setup/install-datasets";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "sqlite",
  }),
  // Allow any host (LAN IP, tunnels, etc.) — needed for phone NFC over local network.
  trustedOrigins: ["*"],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {},
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const complete = await isSetupComplete(db);
          const userCount = await db.user.count();
          if (complete || userCount > 0) {
            throw new Error(
              "Sign-up is disabled. Ask an admin or complete setup first.",
            );
          }
          return {
            data: {
              ...user,
              role: "admin",
            },
          };
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
