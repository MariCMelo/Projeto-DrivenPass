import { validationError } from "@/errors/invalid-credential-error";
import { CreateCredential } from "@/protocols";


async function createCredential(credential: CreateCredential){
    const { title, url, username, password, userId } = credential;

    if(!title || !url || !username || !password || !userId) {
        throw validationError()
    }
}

export const credentialService = {
    createCredential
}