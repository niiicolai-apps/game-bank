import { ref } from 'vue';

const currencies = ref([]);

const create = (name, options={}) => {
    const c = { name, ...options };
    currencies.value.push(c);    
}

const createMany = (...newCurrencies) => {
    newCurrencies.forEach(c => create(c.name, c.options));
}

const findByName = (name) => {
    return currencies.value.find(c => c.name === name);
}

const findAll = () => {
    return currencies;
}

export default {
    create,
    createMany,
    findByName,
    findAll
}
