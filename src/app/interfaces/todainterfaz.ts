interface nombre { nombre:string };
interface titulo { titulo:string };
interface presentacion { presentacion:string };
interface ntair { nombre:nombre , titulo:titulo , presentacion:presentacion };
interface experiencia { puesto:string , year:number , meses:number , lugar:string };
interface formacion { materia:string , periodo:[number,number] , institucion:string };
interface trabajos { foto:string , proyecto:string , estado:string , descripcion:string , autor:string , enlace?:string };
export interface datamasterinterface {ntair:ntair[]|undefined,experiencia:experiencia[]|undefined,formacion:formacion[]|undefined,trabajos:trabajos[]|undefined}


