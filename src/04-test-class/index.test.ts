import lodash from 'lodash';
import { BankAccount, getBankAccount } from '.';

describe('BankAccount', () => {
  let bankAccount: BankAccount;
  const balance = 10;

  beforeEach(() => {
    bankAccount = getBankAccount(balance);
  });

  test('should create account with initial balance', () => {
    expect(bankAccount.getBalance()).toBe(balance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const callback = () => bankAccount.withdraw(20);

    expect(callback).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const newBankAccount = getBankAccount(20);
    const callback = () => bankAccount.transfer(20, newBankAccount);

    expect(callback).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const callback = () => bankAccount.transfer(5, bankAccount);

    expect(callback).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    bankAccount.deposit(10);
    const newBalance = bankAccount.getBalance();

    expect(newBalance).toBe(20);
  });

  test('should withdraw money', () => {
    bankAccount.withdraw(9);
    const newBalance = bankAccount.getBalance();

    expect(newBalance).toBe(1);
  });

  test('should transfer money', () => {
    const newBankAccount = getBankAccount(0);
    bankAccount.transfer(6, newBankAccount);

    expect(newBankAccount.getBalance()).toBe(6);
    expect(bankAccount.getBalance()).toBe(4);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    lodash.random = jest.fn(() => 15);
    const result = await bankAccount.fetchBalance();

    expect(typeof result === 'number').toBeTruthy();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    lodash.random = jest.fn(() => 15);
    await bankAccount.synchronizeBalance();

    expect(bankAccount.getBalance()).toBe(15);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    lodash.random = jest.fn(() => 0);
    const callback = () => bankAccount.synchronizeBalance();

    expect(callback).rejects.toThrow('Synchronization failed');
  });
});
