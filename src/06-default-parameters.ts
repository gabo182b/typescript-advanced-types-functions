export const ceateProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
  };
};

const product1 = ceateProduct(1, true, 12);
const product2 = ceateProduct(2, true);
const product3 = ceateProduct(3);
const product4 = ceateProduct(4, false, 0);
const product5 = ceateProduct(5, true, 100);

console.log(product1, product2, product3, product4, product5);
