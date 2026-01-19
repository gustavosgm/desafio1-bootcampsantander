function calculadoraRankeada(vitorias, derrotas) {
let saldo = (vitorias - derrotas)

switch (true) {
  case (saldo <= 10):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Ferro")
    break
  case (saldo >= 11 && saldo <= 20):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Bronze")
    break
  case (saldo >= 21 && saldo <= 50):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Prata")
    break
  case (saldo >= 51 && saldo <= 80):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Ouro")
    break 
  case (saldo >= 81 && saldo <= 90):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Diamante")
    break
  case (saldo >= 91 && saldo <= 100):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Lendário")
    break
  case (saldo >= 101):
    console.log("O Herói tem de saldo de " + saldo + " está no nível de Imortal")
    break

  }
}
