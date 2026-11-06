import {Cliente} from './models/Cliente.js';
import {Logista} from './models/Logista.js';

const c1 = new Cliente(1,"renato@gmail.com","123abc","Renato Gabriel","12345678987");
console.log(c1.login());
c1.info();

const l1 = new Logista(2,"marcos@gmail.com","456def","Marcos Comercio LTDA","12345678000190");
const l2 = new Logista(3,"loja@gmail.com","789ghi","Loja Exemplo ME","98765432000110");
console.log(l1.login());
l1.info();
console.log(l2.login());
l2.info();
