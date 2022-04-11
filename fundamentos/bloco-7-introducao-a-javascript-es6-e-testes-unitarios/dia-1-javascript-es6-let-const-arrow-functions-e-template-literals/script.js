// parte I
const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((num1, num2) => num1 - num2);
  const textOdds = `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
  
  console.log(textOdds); // será necessário alterar essa linha 😉

  //Parte II

  const fatorial = (number) => {
    let value = 1;
    for (let index = 2; index <= number; index += 1) {
      value *= index;
    }
    return value;
  }

  console.log(fatorial(4));

  const maiorPalavra = (palavras) => {
    let cont = 0;
    for (let index = 0; index < palavras.length; index += 1) {
      if(palavras[index].length > palavras[cont].length){
        cont = index;
      }
    }
    return palavras[cont];
  }

  const separarFrase = (frase) => {
    let palavras = frase.split(' ');
    return maiorPalavra(palavras);
  }

  console.log(separarFrase('Antônio foi no banheiro e não sabemos o que aconteceu'));