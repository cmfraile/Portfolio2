import { Injectable } from '@angular/core';
import { trabajo } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TraerdataService {

  loremtest:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi ea blanditiis dolore aliquid voluptatibus dolores perspiciatis vero ipsum officiis. Neque eius eveniet accusantium vel ipsam eaque iure praesentium! Maxime illo voluptas nobis, pariatur iusto nemo earum eius dolore molestiae, eveniet reiciendis magni, minima soluta sequi consectetur ducimus aspernatur? Quam, unde? Illum animi quia atque tempora corrupti minima ad vel, amet, consequatur vero ab quasi quos. Reprehenderit sequi, expedita blanditiis, nulla unde numquam nemo ipsa recusandae inventore odit aut nam impedit, harum assumenda illum veniam consequuntur fugiat voluptate atque ex consequatur. Ratione rem reprehenderit quam porro animi nesciunt dolor ab? Soluta commodi eius, optio nisi quasi fugit? Laudantium, ullam. Ipsum aut temporibus ea delectus quae inventore veniam at nostrum! Ut optio voluptate facere facilis vel in dolor nostrum modi provident fugiat, ad architecto corporis explicabo nobis! Culpa similique nam reiciendis aperiam? Nesciunt iusto tempora odio dolores quasi voluptates reprehenderit dolorum consequuntur recusandae corporis! Voluptatum sint cumque ipsum consequuntur commodi accusantium in tempore doloremque voluptatem architecto, molestiae eaque ab eveniet, aperiam earum odit ratione voluptate. Autem omnis aliquid alias suscipit. Quod aliquid laudantium sapiente obcaecati repudiandae, tempore placeat, facere rerum fuga temporibus eos autem officiis atque dolores labore? Iste, delectus mollitia?';
  
  data:{about:string,datosinteres:string[],trabajos:trabajo[]} = {
    about:'Lorem ipsum tralali, tralala.',
    datosinteres:['Dato de prueba','Otro dato de prueba','El tercer dato de prueba','asd','asdqw','123123','123123123','13123123123123','Dato de prueba','Otro dato de prueba','El tercer dato de prueba','asd','asdqw','123123','Dato de prueba','Otro dato de prueba','El tercer dato de prueba','asd','asdqw','123123','123123123','13123123123123','Dato de prueba','Otro dato de prueba','El tercer dato de prueba','asd','asdqw','123123','123123123','13123123123123'],
    trabajos:[]
  }

  constructor() { }

}


