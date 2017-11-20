import test from 'ava';

function reverse(str) {
  let revStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

test(t => t.is(reverse(''), ''))
test(t => t.is(reverse('abcdef'), 'fedcba'))
test(t => t.is(reverse('abcde'), 'edcba'))
