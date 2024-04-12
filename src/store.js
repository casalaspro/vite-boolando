import { reactive } from 'vue';
import dbProduct from './assets/db.json';

export const store = reactive({
  products: dbProduct.products
})