import Currency from './currency.js';
import { ref } from 'vue';

const banks = ref([]);

const findByName = (name) => {
    return banks.value.find(b => b.name === name);
}

const findAll = () => {
    return banks;
}

const create = (name, options={}) => {
    const accounts = ref([]);
    if (options.defaultAccounts) {
        options.defaultAccounts.forEach(a => {
            const c = Currency.findByName(a.name);
            if (!c) throw new Error(`Currency ${a.name} does not exist`);
            accounts.value.push({ ...c, ...a });
        });
    }

    const findByCurrency = (currency) => {
        return accounts.value.find(a => a.name === currency);
    }

    const deposit = (balance, currency) => {
        const existing = findByCurrency(currency);
        if (existing) {
            existing.balance += balance;
        } else {
            const c = Currency.findByName(currency);
            if (!c) throw new Error(`Currency ${currency} does not exist`);
            accounts.value.push({ balance, ...c });
        }
    }

    const withdraw = (balance, currency) => {
        const existing = findByCurrency(currency);
        const hasEnough = existing && existing.balance >= balance;
        if (!hasEnough) return false;

        if (existing) {
            existing.balance -= balance;
        }
        
        return true;
    }

    const get = (currency) => {
        const existing = findByCurrency(currency);
        return existing ? existing.amount : 0;
    }

    const has = (amount, currency) => {
        const existing = findByCurrency(currency);
        return existing && existing.amount >= amount;
    }

    const methods = {
        deposit,
        withdraw,
        get,
        has,
        accounts
    }

    banks.value.push({ name, ...methods });

    return methods;
}

export default { 
    create,
    findByName,
    findAll
};
    