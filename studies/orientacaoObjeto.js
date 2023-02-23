class Poligono {
    constructor (altura,largura){
      this.altura = altura
      this.largura = largura
    }
  
  
  
    get area () {
      return this.#calcularArea()
    }
    set mudarLargura(num) {
      this.largura = num
    }
    #calcularArea () {
      return this.altura * this.largura
    }
  }
  let poligono = new Poligono(50,60)
  poligono.mudarLargura = 20
  console.log(poligono.area)
  let altura = 50
  let largura = 60
  
  function calcularArea (alt,lar) {
    return alt* lar
  }
  console.log(calcularArea(50,60))
  const carroDoTales = new Veiculo('azul',100)class Veiculo {
    constructor(cor,velocidade) {
      this.cor = cor
      this.velocidade = velocidade
    }
    acelerar ( ) {
      console.log('o carro chegou a'+this.velocidade+'por hora')
    }
    buzinar ( ) {
      console.log('fom fom')
    }
  }
  /* class Veiculo {
    constructor(cor,velocidade) {
      this.cor = cor
      this.velocidade = velocidade
    }
    acelerar ( ) {
      console.log('o carro chegou a'+this.velocidade+'por hora')
    }
    buzinar ( ) {
      console.log('fom fom')
    }
  }