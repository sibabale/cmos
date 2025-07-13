// [ SERVICES > ACCOUNT SERVICE;L,OZXQ2 ] ##########################################################################

// 1.1. EXTERNAL DEPENDENCIES ......................................................................
import * as fs from 'fs';
import * as path from 'path';
declare const __dirname: string; // Node.js context
// 1.1. END ........................................................................................

// 1.2. INTERNAL DEPENDENCIES ......................................................................
// 1.2. END ........................................................................................

// 1.3. MODULE ...................................................................................

// 1.4. SERVICE CLASS ............................................................................
class AccountService {
    // 1.4.1. FIELDS ...............................................................................
    #accountsFilePath: string;
    // 1.4.1. END ..................................................................................

    // 1.4.2. CONSTRUCTOR ..........................................................................
    constructor() {
        this.#accountsFilePath = path.join(__dirname, '../data/accounts.json');
    }
    // 1.4.2. END ..................................................................................

    // 1.4.3. METHODS ..............................................................................
    getAccounts(): Record<string, any> {
        const data = fs.readFileSync(this.#accountsFilePath, 'utf-8');
        return JSON.parse(data);
    }

    saveAccounts(accounts: Record<string, any>): void {
        fs.writeFileSync(this.#accountsFilePath, JSON.stringify(accounts, null, 2));
    }

    getAccountBalance(accountId: string): any | null {
        const accounts = this.getAccounts();
        return accounts[accountId] || null;
    }

    debitAccount(accountId: string, amount: number): boolean {
        const accounts = this.getAccounts();
        if (!accounts[accountId] || accounts[accountId].balance < amount) return false;
        accounts[accountId].balance -= amount;
        this.saveAccounts(accounts);
        return true;
    }

    creditAccount(accountId: string, amount: number): boolean {
        const accounts = this.getAccounts();
        if (!accounts[accountId]) return false;
        accounts[accountId].balance += amount;
        this.saveAccounts(accounts);
        return true;
    }
    // 1.4.3. END ..................................................................................
}
// 1.4. END .......................................................................................

export default AccountService;
// END FILE ######################################################################################## 