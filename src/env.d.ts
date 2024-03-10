declare namespace NodeJS {
    interface ProcessEnv {
      readonly MONGO_PASSWORD: string
      readonly MONGO_USERNAME: string
      readonly PORT: number
    }
  }