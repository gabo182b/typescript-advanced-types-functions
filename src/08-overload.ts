// Function Overloading: Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters and also the data types of all the parameters in different functions would be different as well . When a function name is overloaded with different jobs/ requirements it is thus referred as Function Overloading or Method Overloading.

// Luis => [L,u,i,s] => string => string[]
// [L,u,i,s] => Luis => string[] => string

// it only works with regular functions

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const result = parseString('Luis');
// it's necessary to check the type before you can use the methods for the types
// result.reverse() => Wont work
if (Array.isArray(result)) {
  result.reverse();
}
const result2 = parseString(['L', 'u', 'i', 's']);
// result2.toLowerCase() => Wont work
if (typeof result2 === 'string') {
  result2.toLowerCase();
}

console.log(
  'array:',
  'Luis =>',
  result,
  'string:',
  "['L', 'u', 'i', 's'] =>",
  result2
);
