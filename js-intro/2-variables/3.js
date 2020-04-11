{
  let foo = 'bar';
}

console.log(foo);

// This returns a ReferenceError, because foo is declared within a block and is unable to be accessed outside of the block with console.log(foo). foo does not exist outside of the block.