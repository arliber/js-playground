import test from 'ava';

function missing(arr) {
  let max = 0, sum = 0, desiredSum = 0, i = 0;
  for(; i< arr.length; i++) {
    sum += arr[i];
    desiredSum += i+1;
    max = max < arr[i] ? arr[i] : max;
  }
  if(max > arr.length) desiredSum += i+1;
  return(sum === desiredSum || max === arr.length) ? undefined : desiredSum-sum;
}

test(t => t.is(missing([]), undefined))
test(t => t.is(missing([1, 4, 3]), 2))
test(t => t.is(missing([2, 3, 4]), 1))
test(t => t.is(missing([5, 1, 4, 2]), 3))
test(t => t.is(missing([1, 2, 3, 4]), undefined))
