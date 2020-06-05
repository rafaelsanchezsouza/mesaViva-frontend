export class Pedido {

    constructor(
      public id: number,
      public cliente: string,
      public email: string,
      public endereco: string,
      public telefone: string
    ) {  }
  
  }