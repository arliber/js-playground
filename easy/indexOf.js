import test from 'ava';

function indexOf(arr, needle) {
  let i = 0;
  for(; i < arr.length && arr[i] !== needle; i++);
  return i === arr.length ? -1 : i;
}

test(t => t.is(indexOf([1, 2, 3], 1), 0))
test(t => t.is(indexOf([1, 2, 3], 4), -1))
test(t => t.is(indexOf([1, 2, 3], 3), 2))
