/**
 * Clase mostar los errores de comunicación en los formularios
 */
export class errorForm{
     view: boolean;
     title: string;
     message: string;

     constructor(dat?:errorForm){
          if(dat){
               this.view = dat.view;
               this.title = dat.title;
               this.message = dat.message;
          }
          else{
               this.view = false;
               this.title = "";
               this.message = "";
          }
     }
}