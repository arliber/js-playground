import test from 'ava';

function reduce(data, action, acc) {
  if(data.length === 0) return acc;
  else {
    let b = data[0];
    data.splice(0, 1);
    return reduce(data, action, action(acc, b));
  }
}

test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10))
