import { Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';


@Controller("usuarios")
export class UsuariosController {
  
  //endpoint
  //Destino de la request
  //se escribe como una funcion en una clase controlador 
  @Get()
  cosultarUsuarios(): string {
    return "Aqui se podran consultar todos los usuarios";
  }

  //desde la request se calcula el parametro id
  @Get(":id")
  consultarUsuariosPorId( @Param("id") id:string ){
    return `aqui se va a consultar usuarios por id: ${ id }`
  }

  @Post()
  crearUsuario(): string {
    return "Aqui se podra crear un usuario";
  }
  @Patch()
  actualizarUsuario(): string {
    return "Aqui se podra actualizar un usuario";
  }

  @Patch(":id")
  actualizarUsuarioPorId( @Param("id") id:string ){
    return `aqui se va a actualizar un usuario por id: ${ id }`
  }

  @Delete()
  eliminarUsuario(): string {
    return "Aqui se podra eliminar un usuario";
  }
  @Delete(":id")
  eliminarUsuarioPorId( @Param("id") id:string ){
    return `aqui se va a eliminar un usuario por id: ${ id }`
  }
}