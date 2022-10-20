// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function comparacao(a, b){
    return a - b
}

function retornaArrayOrdenado(array) {
    return array.sort(comparacao)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = []
    for(let num of array){
        if(num % 2 === 0){
            arrayPares.push(num)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresQuadrado = []
    for(let num of array){
        if(num % 2 === 0){
            paresQuadrado.push(num*num)
        }
    }

    return paresQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    retornaArrayOrdenado(array)
    return array[array.length-1]
}

// EXERCÍCIO 07
// const num1 = prompt('Insira o primeiro número')
// const num2 = prompt('Insira o segundo número')

function retornaObjetoEntreDoisNumeros(num1, num2) {
    if(num1>num2){
        maiorNumero = num1
        maiorDivisivelPorMenor = num1 % num2 === 0
        diferenca = num1 - num2

    }else{
        maiorNumero = num2
        maiorDivisivelPorMenor = num2 % num1 === 0
        diferenca = num2 - num1
    }

return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPrimeirosPares = []
    for(let i = 0; arrayPrimeirosPares.length < n; i+=2){
        arrayPrimeirosPares.push(i);
    }
   return arrayPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC){
    return('Equilátero')
}else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
    return('Isósceles')
}else{
    return('Escaleno')
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    return [arrayOrdenado[arrayOrdenado.length-2], arrayOrdenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`)   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto = {...pessoa, nome: 'ANÔNIMO'}
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizadas = pessoas.filter((elemento) => {
        return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
    }
    )
    return autorizadas 
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const desautorizadas = pessoas.filter((elemento) => {
        return !(elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60)
    }
    )
    return desautorizadas 
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i of contas) {
      let soma = 0;
      for (let u in i.compras) {
        soma += i.compras[u];
      }
      i.compras = [];
      i.saldoTotal -= soma;
    }
    return contas;
  }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => {
      if (a.nome > b.nome) {
        return 1;
      } else if (a.nome < b.nome) {
        return -1;
      } else {
        return 0;
      }
    });
    return consultas;
  }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const ordemConsultas = consultas.sort((a, b) => {
        return new Date(a.dataDaConsulta.split('/').reverse()).getTime() - new Date(b.dataDaConsulta.split('/').reverse()).getTime()
    })

    return ordemConsultas
}



//DIFICULDADES NO 14 E 15