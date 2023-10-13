import { usersPost } from "controllers";
import { Router } from "express";
import { validateBody } from "middlewares/validation-middleware";
import { createUserSchema } from "schemas/users-schemas";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);

export { usersRouter };
