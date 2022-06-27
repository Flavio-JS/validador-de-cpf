export const restcalculation2digit = (numbers: [number]) => {
  let soma: number = 0;
  let resto: number = 0;
  let segundoDigitoVerificador: number | string;

  for (let i = 0; i < 9; i++) {
    soma = soma + numbers[i + 1] * (10 - i);
  }
  resto = soma % 11;

  if (resto == 0 || resto == 1) {
    segundoDigitoVerificador = 0;
  } else {
    segundoDigitoVerificador = 11 - resto;
  }
  return segundoDigitoVerificador;
};
