declare global {
    namespace NodeJS {
      interface ProcessEnv {
        Port?: int;
        API_KEY: string;
        API_SECRET: string;
        TOKEN: string;
        ACCESS_TOKEN: string;
        ACCESS_SECRET: string;
        CLIENT_ID: string;
        CLIENT_SECRET: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}