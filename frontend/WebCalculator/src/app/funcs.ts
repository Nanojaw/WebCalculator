export interface func {
  name: string;
  description: string;
  expression: string;
}

export const funcs: func[] = [
  { name: 'sqrt', description: 'get square root', expression: 'sqrt' },
  { name: 'power', description: 'power first to second', expression: 'pow' },
];
