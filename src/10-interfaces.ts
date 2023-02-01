// In general Interface is the structure or skeleton for object. Interface is programming syntax which enforce the syntax on the class. It is the definition of the object with only types of data it must have. Interface is the type for the object. Interface in typescript is types for the object. In Type-Script interface is defined with the help of the interface keyword. JavaScript uses an interface for type checking. The interface is also known as structural subtyping.

// the 'interface' can be extended while the 'type' cannot be extended

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

const addProdcut = (data: Product) => {
  products.push(data);
};

addProdcut({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  stock: 12,
});
