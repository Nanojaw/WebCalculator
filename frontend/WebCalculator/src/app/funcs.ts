export interface func {
  name: string;
  description: string;
  expression: string;
}

export const funcs: func[] = [
  { name: 'ln', description: 'Take the natural log of x', expression: 'ln()' },
  { name: 'log', description: 'Takes the base log of x', expression: 'log(,)' },
  { name: 'log2', description: 'Take the base 2 log of x', expression: 'log2()' },
  { name: 'log10', description: 'Take the base 10 log of x', expression: 'log10()' },

  { name: 'exp', description: 'Returns e to the x power', expression: 'exp()' },
  { name: 'exp2' , description: 'Takes the 2 to the power of x', expression: 'exp2()' },

  { name: 'pow', description: 'Returns x to the power of y', expression: 'pow(,)' },

  { name: 'cos', description: 'Returns cos of x', expression: 'cos()' },
  { name: 'acos', description: 'Returns acos of x', expression: 'acos()' },
  { name: 'cosh', description: 'Returns cosh of x', expression: 'cosh()' },
  { name: 'acosh', description: 'Returns acosh of x', expression: 'acosh()' },

  { name: 'sin', description: 'Returns sin of x', expression: 'sin()' },
  { name: 'asin', description: 'Returns asin of x', expression: 'asin()' },
  { name: 'sinh', description: 'Returns sinh of x', expression: 'sinh()' },
  { name: 'asinh', description: 'Returns asinh of x', expression: 'asinh()' },

  { name: 'tan', description: 'Returns tan of x', expression: 'tan()' },
  { name: 'atan', description: 'Returns atan of x', expression: 'atan()' },
  { name: 'tanh', description: 'Returns tanh of x', expression: 'tanh()' },
  { name: 'atan2', description: 'Returns atan2 of x', expression: 'atan2()' },

  { name: 'sqrt', description: 'Returns sqrt of x', expression: 'sqrt()' },
  { name: 'cbrt', description: 'Returns cbrt of x', expression: 'cbrt()' },

  { name: 'hypotenuse', description: 'Calculates hypotenuse of a triangle with sides x and y', expression: 'hypot(,)' },

  { name: 'floor', description: 'Rounds x down', expression: 'floor()' },
  { name: 'round', description: 'Rounds x', expression: 'round()' },
  { name: 'ceil', description: 'Rounds x up', expression: 'ceil()'}

];
