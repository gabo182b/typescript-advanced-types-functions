import { addProdcut } from './products/product.service';

addProdcut({
  id: '1',
  title: 'Product 1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 12,
  category: {
    id: '12',
    name: 'Category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
