import { Router } from "express";

import * as cpfController from "../controllers/cpfController";

const router = Router();

router.get("/", cpfController.cpf);

export default router;
