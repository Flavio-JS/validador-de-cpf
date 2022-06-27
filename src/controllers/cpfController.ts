import { Request, Response } from "express";
import { restcalculation1digit } from "../lib/calculoRestoPrimeiroDigito";
import { restcalculation2digit } from "../lib/calculoRestoSegundoDigito";

export const cpf = async (req: Request, res: Response) => {
  let cpfString: string = req.query.cpf as string;
  let cpfNumber: [number] = [0];
  let regiaoFiscal: string = "";
  let cpfValidacao: boolean = false;
  let mostrar: boolean = false;
  let primeiroDigitoVerificador: string = "";
  let segundoDigitoVerificador: string = "";

  if (cpfString == undefined) {
    cpfString = "";
  }

  for (let i = 0; i < 11; i++) {
    cpfNumber[i] = parseInt(cpfString[i]);
  }

  if (cpfString[8] == "1") {
    regiaoFiscal = "DF, GO, MS, MT ou TO";
  } else if (cpfString[8] == "2") {
    regiaoFiscal = "AC, AM, AP, PA, RO ou PR";
  } else if (cpfString[8] == "3") {
    regiaoFiscal = "CE, MA ou PI";
  } else if (cpfString[8] == "4") {
    regiaoFiscal = "AL, PB, PE ou RN";
  } else if (cpfString[8] == "5") {
    regiaoFiscal = "BA ou SE";
  } else if (cpfString[8] == "6") {
    regiaoFiscal = "MG";
  } else if (cpfString[8] == "7") {
    regiaoFiscal = "ES ou RJ";
  } else if (cpfString[8] == "8") {
    regiaoFiscal = "SP";
  } else if (cpfString[8] == "9") {
    regiaoFiscal = "PR ou SC";
  } else {
    regiaoFiscal = "RS";
  }

  primeiroDigitoVerificador = restcalculation1digit(cpfNumber).toString();

  segundoDigitoVerificador = restcalculation2digit(cpfNumber).toString();

  if (primeiroDigitoVerificador == cpfString[9]) {
    if (segundoDigitoVerificador == cpfString[10]) {
      cpfValidacao = true;
    }
  }

  if (cpfString != "") {
    mostrar = true;
  }

  res.render("pages/verificar-cpf", {
    mostrarOuNao: true,
    cpfString,
    regiaoFiscal,
    cpfValidacao,
    mostrar,
  });
};
