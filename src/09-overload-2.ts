// Function Overloading
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const result = parseString('Luis');
// isn't necessary to check the type before you can use the methods for the types
result.reverse();

const result2 = parseString(['L', 'u', 'i', 's']);
result2.toLowerCase();

const result3 = parseString(15);

console.log(
  'array:',
  'Luis =>',
  result,
  'string:',
  "['L', 'u', 'i', 's'] =>",
  result2,
  'number:',
  '15 =>',
  result3
);
