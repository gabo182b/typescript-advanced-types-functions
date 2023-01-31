// Unknown is one of those types that once it clicks, you can find quite a lot of uses for it. It acts like a sibling to the any type. Where any allows for ambiguity - unknown requires specifics, it forces you to do a type check

let anyVariable: any;
anyVariable = {};

let isNew: boolean = anyVariable;

let unknownVariable: unknown;
unknownVariable = {};

if (typeof unknownVariable === 'string') {
  unknownVariable.toUpperCase();
}

if (typeof unknownVariable === 'boolean') {
  let isNew2: boolean = unknownVariable;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
