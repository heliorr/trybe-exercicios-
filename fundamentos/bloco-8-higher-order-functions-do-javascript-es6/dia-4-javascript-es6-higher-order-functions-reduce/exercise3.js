const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const separarPalavras = names.reduce((acc, name) => {
        acc + name.split('').reduce((acc2, value) => {
            if(value === 'a' || value === 'A'){
                return acc += 1;
            }
        }, 0)
        return acc;
    }, 0);
    return separarPalavras;
  }

  console.log(containsA());