export const ceateProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    // id,
    // stock: stock || 10,
    // isNew: isNew || true,
    id,
    stock: stock ?? 10, // nullish-coalescing
    isNew: isNew ?? true, // nullish-coalescing
  };
};

// 0 === false
// '' === false
// false === false
// 'nullish-coalescing' checks only for 'null' or 'undefinied'

const product1 = ceateProduct(1, true, 12);
const product2 = ceateProduct(2, true);
const product3 = ceateProduct(3);
const product4 = ceateProduct(4, false, 0);

console.log(product1, product2, product3, product4);
