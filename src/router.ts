import express from 'express';

import * as keyController from './controllers/key';
import * as documentController from './controllers/document';

const router = express.Router();

router.get('/public_key', keyController.getPublicKey);
router.post('/document', documentController.validate);

export default router;
