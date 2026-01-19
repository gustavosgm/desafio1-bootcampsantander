class heroi{
  constructor(nome, idade, tipo){
    this.nomeHeroi = nome
    this.idadeHeroi = idade
    this.tipoDeHeroi = tipo
  }

    atacar(){
      if (this.tipoDeHeroi === "mago"){
          console.log(`${this.tipoDeHeroi} atacou usando magia`)
      } else if (this.tipoDeHeroi === "guerreiro") {
          console.log(`${this.tipoDeHeroi} atacou usando espada`)
      } else if (this.tipoDeHeroi === "monge") {
          console.log(`${this.tipoDeHeroi} atacou usando artes marciais`)
      } else if (this.tipoDeHeroi === "ninja"){
          console.log(`${this.tipoDeHeroi} atacou usando shuriken`)
      }
    }
}
