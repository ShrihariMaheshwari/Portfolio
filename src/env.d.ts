/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly PUBLIC_GITHUB: string;
    readonly PUBLIC_LINKEDIN: string;
    readonly PUBLIC_TWITTER: string;
    readonly PUBLIC_EMAIL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
}