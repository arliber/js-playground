import test from 'ava';

function isPalindrome(str) {
  str = str.replace(/ /g,'').toLowerCase();
  let i = 0, j = str.length - 1;
  for(; i < str.length && j > 0 && str[i] === str[j] && i <= j; i++, j--);
  return i >= j;
}

console.log(isPalindrome(''))

test(t => t.is(isPalindrome(''), true))
test(t => t.is(isPalindrome('abcdcba'), true))
test(t => t.is(isPalindrome('abcd'), false))
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true))
test(t => t.is(isPalindrome('hello'), false))
