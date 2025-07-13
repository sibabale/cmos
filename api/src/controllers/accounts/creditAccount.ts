import { Request, Response } from 'express';
import AccountService from '../../services/AccountService';

const accountService = new AccountService();

export function creditAccount(req: Request, res: Response) {
  const { accountId } = req.params;
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({
      error: 'INVALID_REQUEST',
      message: 'Amount is required',
      code: 'CMOS_400'
    });
  }
  const success = accountService.creditAccount(accountId, amount);
  if (!success) {
    return res.status(404).json({
      error: 'ACCOUNT_NOT_FOUND',
      message: `Account ${accountId} not found`,
      code: 'CMOS_404'
    });
  }
  return res.json({
    success: true,
    message: `Credited ${amount} to account ${accountId}`,
    timestamp: new Date().toISOString()
  });
} 