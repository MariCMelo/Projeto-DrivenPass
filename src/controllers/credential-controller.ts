import { AuthenticatedRequest } from '@/middlewares';
import { credentialService } from '@/services/credential-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

async function createCredential(req: AuthenticatedRequest, res: Response) {
    const {userId} = req

    const credential = await credentialService.createCredential()
}