// Tuples may be destructured like arrays; the destructuring variables get the types of the corresponding tuple elements

const prices: (number | string)[] = ['luis', 2, 3, 4, 5, 'as'];

const user: [string, number, boolean] = ['gabriel', 15, true];

const [username, age] = user;

console.log(`${username}, ${age}`);

// React's hook useState uses a tuple
