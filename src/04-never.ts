// When we are certain that a particular situation will never happen, we use the never type. For example, suppose you construct a function that never returns or always throws an exception then we can use the never type on that function. Never is a new type in TypeScript that denotes values that will never be encountered.

// const withoutEnd = () => {
//   while (true) {
//     console.log('Never ends');
//   }
// };

const throwErrorMessage = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return `It's an string`;
  } else if (Array.isArray(input)) {
    // this way we check if we're getting an array
    return `It's an Array`;
  }
  return throwErrorMessage(`There isn't any match`);
};

console.log(example('test'));
console.log(example([1, 8, 2]));
console.log(example(182)); // when the error with the 'never' type get executed the app ends
console.log(example('Test after error'));
