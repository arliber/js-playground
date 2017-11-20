import test from 'ava';

function isPrime(num) {
  if(num < 2) {
    return false;
  }
  for(let i = 2; i < num; i++) {
    if(num%i === 0) return false;
  }
  return true;
}

test(t => t.is(isPrime(0), false))
test(t => t.is(isPrime(1), false))
test(t => t.is(isPrime(2), true))
test(t => t.is(isPrime(9), false))
test(t => t.is(isPrime(17), true))
test(t => t.is(isPrime(25), false))
test(t => t.is(isPrime(73), true))
test(t => t.is(isPrime(10000000000000), false))