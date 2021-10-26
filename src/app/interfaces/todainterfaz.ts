export interface admin { nombre:string , pass:string };
export interface ntair { nombre:string , titulo:string , presentacion:string };
export interface experiencia { puesto:string , year:number , meses:number , lugar:string };
export interface formacion { materia:string , periodo:[number,number|null] , institucion:string };
export interface dinteres { dato:string };
export interface trabajo { foto:string , proyecto:string , estado:string , descripcion:string , autor:string , enlace:string };
export interface datamasterinterface {ntair:ntair|undefined,experiencia:experiencia[]|undefined,formacion:formacion[]|undefined,dinteres:dinteres[]|undefined,trabajo:trabajo[]|undefined}