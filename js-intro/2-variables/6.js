const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No. Alhough FOO is a constant, the FOO within the block is in a separate scope from FOO on the first line. Therefore, FOO on the first line is unchanged and logs 'bar' on line 6.