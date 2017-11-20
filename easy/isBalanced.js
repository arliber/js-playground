import test from 'ava';

function isBalanced(str) {
  let braces = [];
  for(let i = 0;i<str.length;i++) {
    if(str[i] === '{') braces.push('{');
    else if(str[i] === '}') {
      if(braces.length === 0 || braces[braces.length-1] !== '{') return false;
      braces.pop();
    }
  }
  return braces.length === 0;
}

test(t => t.is(isBalanced('}{'), false))
test(t => t.is(isBalanced('{{}'), false))
test(t => t.is(isBalanced('{}{}'), true))
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))
