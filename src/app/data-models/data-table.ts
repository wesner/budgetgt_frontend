/**
 * Agosto 24 del 2018
 * Modelo de datos para construir una tabla con datos
 */
export class tableNames{
     id: string;
     nameArray: string;
     nameTable: string;
     type: string;
     search: string = "";
   
     constructor(_nameArray:string, _nameTable:string, _type:string){
       this.id = "";
       this.nameArray = _nameArray;
       this.nameTable = _nameTable;
       this.type = _type;
       this.search = "";
     }
}


/**
 * Listado de tipos que pueden exitir para darle formato a los valores de las columnas
 */
export class typeDataTable { 
     constructor(
      public currency: string = "currency",
      public state: string = "state",
      public boolean: string = "boolean",
      public general: string = "general",
      public name: string = "name",
      public description: string = "description"
     ){}
}

/** Configuraciones del encabezado y color del listado de datos */
export class settingsDataTable{
  constructor(
    public title: string = "",
    public subtitle: string = "",
    public color: string = "",
    public typeIcon: string="" //account, category, fixedExpense, fixedIncome, creditCard, debt, income, expense
  ){}
}