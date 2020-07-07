const x = {val: 10};
const y = x

y == x; //true
x['val2'] = 20;

y === x; //true

const z = {...x};
x === z //false