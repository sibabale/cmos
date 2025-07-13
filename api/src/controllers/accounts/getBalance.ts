import { Request, Response } from 'express';
import AccountService from '../../services/AccountService';

const accountService = new AccountService();

export function getBalance(req: Request, res: Response) {
  const { accountId } = req.params;
  const account = accountService.getAccountBalance(accountId);
  if (!account) {
    return res.status(404).json({
      error: 'ACCOUNT_NOT_FOUND',
      message: `Account ${accountId} not found`,
      code: 'CMOS_404'
    });
  }
  return res.json({
    success: true,
    data: account,
    timestamp: new Date().toISOString()
  });
} 