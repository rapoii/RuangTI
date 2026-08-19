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
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3005",
  secret: process.env.BETTER_AUTH_SECRET || "ruangti_better_auth_secret_key_untirta_2026_industrial_engineering",
  
  // Custom user fields untuk profil mahasiswa/dosen Untirta
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "Mahasiswa",
      },
      institution: {
        type: "string",
        required: false,
        defaultValue: "Untirta",
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
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID || "",
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
      tenantId: process.env.MICROSOFT_TENANT_ID || "common",
      enabled: !!process.env.MICROSOFT_CLIENT_ID,
    },
  },

  // Strict Domain Validation Hooks
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const email = user.email.toLowerCase().trim();

          // Cek domain email
          const isUntirtaStaff = email.endsWith("@untirta.ac.id");
          const isUntirtaStudent = email.endsWith("@student.untirta.ac.id");

          if (!isUntirtaStaff && !isUntirtaStudent) {
            throw new Error(
              "Akses Ditolak: Pendaftaran RuangTI hanya diizinkan untuk civitas akademika UNTIRTA (@untirta.ac.id atau @student.untirta.ac.id)."
            );
          }

          return {
            data: {
              ...user,
              email,
              role: user.role || (isUntirtaStudent ? "Mahasiswa" : "Dosen/Staff"),
              institution: user.institution || "Untirta",
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
