import { PrismaClient } from "@prisma/client";

interface CustomNodeJSGlobal extends NodeJS.Global {
  clientDB: PrismaClient;
}

declare const global: CustomNodeJSGlobal;

const clientDB = global.clientDB || new PrismaClient();

if (process.env.NODE_ENV === "development") global.clientDB = clientDB;

export default clientDB;
