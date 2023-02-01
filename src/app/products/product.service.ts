import { Product } from './product.model';

export const products: Product[] = [];

export const addProdcut = (data: Product) => {
  // data.id = 'wasd';
  // data.createdAt = new Date(1998, 1, 1);
  products.push(data);
};
