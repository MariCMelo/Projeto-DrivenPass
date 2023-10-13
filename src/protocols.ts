import { Credential } from "@prisma/client";

export type CreateCredential = Omit<Credential, 'id'>;
