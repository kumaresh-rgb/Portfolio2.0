/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string;
  // Add other Vite env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
