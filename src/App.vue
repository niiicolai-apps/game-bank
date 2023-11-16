<script setup>
import GameBank from '../index.js';

const CURRENCIES = {
  COINS: 'coins',
  DIAMONDS: 'diamonds'
}

GameBank.Currency.createMany(
  { name: CURRENCIES.COINS, options: { symbol: 'c' } },
  { name: CURRENCIES.DIAMONDS, options: { symbol: 'd' } }
);

GameBank.Bank.create("Player Bank", {
  defaultAccounts: [
    { name: CURRENCIES.COINS, balance: 100 },
    { name: CURRENCIES.DIAMONDS, balance: 10 }
  ]
});
</script>

<template>
  <div>
    <h1>Bank Accounts</h1>
    <GameBank.components.BankAccounts bank_name="Player Bank" />
  </div>
</template>
