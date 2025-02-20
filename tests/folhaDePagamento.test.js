/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from "../index.js";

describe("Testes dos cáculos de folha", () => {
  it("Deve retornar a soma das horas extras", () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);
    
    expect(retornado).toBe(esperado);
  });
    
  it("Deve retornar o novo valor com o desconto", () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);
    
    expect(retornado).toBe(esperado);
  });
});
