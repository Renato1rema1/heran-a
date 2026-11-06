import {Usuario} from './Usuario.js';

export class Logista extends Usuario {
    razaoSocial;
    cnpj;
    constructor(id,email,senha,razaoSocial,cnpj){
        // executa o contrutor pai
        super(id,email,senha)
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
    info(){
        console.log("==============")
        console.log("Logista: " + this.razaoSocial);
        console.log("CNPJ: " + this.cnpj);
        console.log("Email: " + this.email);
    }
}
