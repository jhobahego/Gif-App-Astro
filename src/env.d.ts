/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GIPHY_API_URL: string;
  readonly PUBLIC_GIPHY_API_KEY: string;
  readonly PUBLIC_TENOR_API_URL: string;
  readonly PUBLIC_TENOR_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}