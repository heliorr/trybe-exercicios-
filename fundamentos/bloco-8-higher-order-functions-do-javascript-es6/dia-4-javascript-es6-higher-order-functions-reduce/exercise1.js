const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const newArray = arrays.reduce((acc, number) => acc.concat(number), [])
    return newArray;
  }

  console.log(flatten());