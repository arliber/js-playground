import test from 'ava';

function filter(arr, condition) {
  let res = []
  for(let i = 0;i < arr.length; i++) {
    if(condition(arr[i])) res.push(arr[i]) 
  }
  return res;
}

test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1,2]))
