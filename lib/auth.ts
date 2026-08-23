import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Pastikan folder data tersedia
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "ruangti_auth.db");
const sqliteDb = new Database(dbPath);

export const auth = betterAuth({
  database: sqliteDb,
  trustedOrigins: [
    "https://ruangti.varevastudio.tech",
    "http://localhost:3000",
    "http://localhost:3005",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3005"
  ],
  baseURL: process.env.BETTER_AUTH_URL || (typeof window !== "undefined" ? window.location.origin : undefined),
  secret: process.env.BETTER_AUTH_SECRET || (() => {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FATAL: BETTER_AUTH_SECRET environment variable is not defined in production!");
    }
    return "dev_only_ephemeral_secret_key_untirta_2026_dev_mode";
  })(),
  
  // Custom user fields untuk profil praktisi & mahasiswa Teknik Industri
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "Praktisi",
      },
      institution: {
        type: "string",
        required: false,
        defaultValue: "Teknik Industri",
      },
      phone: {
        type: "string",
        required: false,
      },
      address: {
        type: "string",
        required: false,
      },
      postalCode: {
        type: "string",
        required: false,
      },
      plan: {
        type: "string",
        required: false,
        defaultValue: "Pro",
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      enabled: !!process.env.GOOGLE_CLIENT_ID,
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      requireLocalEmailVerified: false,
    },
  },

  // Database Hooks
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const email = user.email.toLowerCase().trim();

          return {
            data: {
              ...user,
              email,
              role: user.role || "Praktisi TI",
              institution: user.institution || "Teknik Industri",
              plan: "Pro",
            },
          };
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          return {
            data: session,
          };
        },
      },
    },
  },
});
