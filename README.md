# Install

```bash
$ npm install
```

# Release
1. Ensure 7zip is installed (https://www.7-zip.org/download.html)
2. Set system env. variable: 
```bash
export PATH=$PATH:/c/Program\ Files/7-Zip
```
3. Run the release script:
```bash
$ bash release.sh
```
4. Create and publish a new release on https://github.com/niiicolai-apps/game-bank/releases/new (Remember to include the zip created in step 3)

# Usage in development

```bash
$ npm run dev
```

# Usage in other projects

## Install in other projects
Remember to replace `#v1.0.0` with the needed version.
```bash
npm install --save niiicolai-apps/game-bank#v1.0.0
```

## Update in other projects
```bash
npm update niiicolai-apps/game-bank
```

## Create bank and currencies

```vue
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
```