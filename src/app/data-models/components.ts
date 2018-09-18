/**
 * 
 * Clases de datos para los componetes generales de la aplicación
 */

 export class modelHeader{
      constructor(
          public title: string="",
          public name: string="",
          public description: string="",
          public button: buttonHeader = new buttonHeader(false, "", "")
      ){}
}
export class buttonHeader{
     constructor(
        public view: boolean = false,
        public title: string = "",
        public className: string = "dark",
     ){}
}




/**
 * Modal form component
 */
export class modelModalForm{
    constructor(
        public type: string = "detail"
    ){}
}