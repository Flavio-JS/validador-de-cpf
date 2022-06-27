export const restcalculation1digit = (numbers: [number]) => {
  let soma: number = 0;
  let resto: number = 0;
  let primeiroDigitoVerificador: number | string;

  for (let i = 0; i < 9; i++) {
    soma = soma + numbers[i] * (10 - i);
  }
  resto = soma % 11;

  if (resto == 0 || resto == 1) {
    primeiroDigitoVerificador = 0;
  } else {
    primeiroDigitoVerificador = 11 - resto;
  }
  return primeiroDigitoVerificador;
};
