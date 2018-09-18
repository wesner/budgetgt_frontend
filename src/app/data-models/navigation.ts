/**
 * Estructura y rutas del menú lateral
 */
class cat{ /** categorias */
     constructor(
          public name: string="",
          public description: string="",
          public modules: mod[]=[]
     ){ }
}
class mod{ /** modulos */
     constructor(
          public name: string="",
          public description: string="",
          public route: string="",
          public icon: string="",
          public submodules: sub[]=[]
     ){ }
}
class sub{ /** submodulos */
     constructor(
          public name: string="",
          public description: string="",
          public route: string="",
          public icon: string=""
     ){ }
}


/**
 * Consolidación de todo el modelo
 */
export var modules = [
     new cat("Configuraciones", "", [
          new mod("Cuenta", "", "", "", [
               new sub("Perfil", "", "/main/profile", ""),
               new sub("Cambio de Contraseña", "", "/main/change-password", ""),
               new sub("Eliminar Cuenta", "", "/main/delete-account", "")
          ])
     ]),
     new cat("Dashboard", "", [
          new mod("Dashboard", "", "/main/dashboard", "")
     ])
];