import test from 'ava';

function isSorted(arr) {
  let i = 0;
  for(i = 0; i < arr.length - 1 && arr[i] < arr[i+1]; i++);
  return i === Math.max(arr.length-1,0)
}

test(t => t.is(isSorted([]), true))
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSorted([3, 9, -3, 10]), false))
