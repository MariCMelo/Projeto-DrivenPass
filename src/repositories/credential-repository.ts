import { prisma } from "config";
import { CreateCredential } from "protocols";

async function createCredential(credential: CreateCredential) {
  return prisma.credential.create({
    data: credential,
  });
}

async function findCredentialByTitle(title: string) {
  return prisma.credential.findFirst({
    where: {
      title,
    },
  });
}

export const credentialRepository = {
  createCredential,
  findCredentialByTitle,
};
