import test from 'ava';

function factorial(n) {
  if(n < 0) throw new Error('non-negative number please');
  if(n === 0) return 1;
  return n*factorial(n-1);
}

test(t => t.is(factorial(0), 1))
test(t => t.is(factorial(1), 1))
test(t => t.is(factorial(6), 720))
