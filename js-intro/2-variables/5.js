let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

 // This logs the string 'bar.' foo is initialized on the first line with 'bar'. The third line initializes foo again with 'qux', but this foo is not in the same scope as the foo on the first line. Therefore, line 6 logs 'bar' from the first line instead of 'qux' from inside the block.