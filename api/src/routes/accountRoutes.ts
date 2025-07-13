// [ ROUTES > ACCOUNT ROUTES ] ##########################################################################

import { Router } from 'express';
import { getBalance, debitAccount, creditAccount } from '../controllers/accounts';

const router = Router();

router.get('/accounts/:accountId/balance', getBalance);
router.post('/accounts/:accountId/debit', debitAccount);
router.post('/accounts/:accountId/credit', creditAccount);

export default router;
// END FILE ######################################################################################## 