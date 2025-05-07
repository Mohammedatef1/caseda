import { PrismaClient } from "@/generated/prisma"


declare global {
  var cachedPrisma: PrismaClient
}

let prisma : PrismaClient
if(process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
}else {
  if (global.cachedPrisma) {
    prisma = global.cachedPrisma
  } else{
    prisma = new PrismaClient()
  }
}

export const db = prisma