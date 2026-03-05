import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      auth: () => { userId: string; has: (permisson: any) => boolean };
      plan?: string;
      file: any;
    }
  }
}
