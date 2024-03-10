declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DB_URL: string;
      readonly MONGO_PASSWORD: string;
      readonly MONGO_USERNAME: string;
      readonly PORT?: string;
    }
  }
}

export {};
