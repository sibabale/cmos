import { Request, Response } from 'express';
import AccountService from '../../services/AccountService';

const accountService = new AccountService();

export function debitAccount(req: Request, res: Response) {
  const { accountId } = req.params;
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({
      error: 'INVALID_REQUEST',
      message: 'Amount is required',
      code: 'CMOS_400'
    });
  }
  const success = accountService.debitAccount(accountId, amount);
  if (!success) {
    return res.status(400).json({
      error: 'INSUFFICIENT_FUNDS',
      message: `Insufficient balance for debit of ${amount}`,
      code: 'CMOS_INSUFFICIENT_FUNDS'
    });
  }
  return res.json({
    success: true,
    message: `Debited ${amount} from account ${accountId}`,
    timestamp: new Date().toISOString()
  });
} 