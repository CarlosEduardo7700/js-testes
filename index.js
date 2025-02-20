const somaHorasExtras = ( salario, valorHorasExtras ) => {
  return salario + valorHorasExtras;
};

const calculaDescontos = (salario, descontos) => {
  return salario - descontos;
};

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado){
      if (valor !== esperado) {
        throw {};
      }
    }
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch (error) {
    console.error(`${titulo} não passou!`);
  }
};
  
teste("somaHorasExtras", () => {
  const esperado = 2400;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
  
teste("calculaDesconto", () => {
  const esperado = 2200;
  const retornado = calculaDescontos(2500, 300);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});