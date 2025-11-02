"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tareas_module_1 = require("./tareas/tareas.module");
const estado_tareas_module_1 = require("./estado_tareas/estado_tareas.module");
const historial_tareas_module_1 = require("./historial_tareas/historial_tareas.module");
const notificaciones_module_1 = require("./notificaciones/notificaciones.module");
const prioridad_tareas_module_1 = require("./prioridad_tareas/prioridad_tareas.module");
const tipo_tareas_module_1 = require("./tipo_tareas/tipo_tareas.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const prisma_module_1 = require("./prisma/prisma.module");
const login_module_1 = require("./login/login.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuarios_module_1.UsuariosModule, tareas_module_1.TareasModule, estado_tareas_module_1.EstadoTareasModule, historial_tareas_module_1.HistorialTareasModule, notificaciones_module_1.NotificacionesModule, prioridad_tareas_module_1.PrioridadTareasModule, tipo_tareas_module_1.TipoTareasModule, prisma_module_1.PrismaModule, login_module_1.LoginModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map