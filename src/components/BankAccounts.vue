<template>
    <ul>
      <li v-for="account in accounts" :key="account.name">
        <div>
          {{ account.name }} ({{ account.symbol }}): {{ account.balance }}
        </div>
        <div>
          <button @click="bank.deposit(10, account.name)">Deposit</button>
          <button @click="bank.withdraw(10, account.name)">Withdraw</button>
        </div>
      </li>
    </ul>
</template>

<script setup>
import Bank from '../bank/bank.js';
import { computed } from 'vue';
const props = defineProps({
    bank_name: {
        type: String,
        required: true
    }
})
const bank = Bank.findByName(props.bank_name);
const accounts = computed(() => bank.accounts);
</script>