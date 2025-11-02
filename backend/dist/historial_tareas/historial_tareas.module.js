"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialTareasModule = void 0;
const common_1 = require("@nestjs/common");
const historial_tareas_service_1 = require("./historial_tareas.service");
const historial_tareas_controller_1 = require("./historial_tareas.controller");
const prisma_module_1 = require("src/prisma/prisma.module");
let HistorialTareasModule = class HistorialTareasModule {
};
exports.HistorialTareasModule = HistorialTareasModule;
exports.HistorialTareasModule = HistorialTareasModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [historial_tareas_controller_1.HistorialTareasController],
        providers: [historial_tareas_service_1.HistorialTareasService],
    })
], HistorialTareasModule);
//# sourceMappingURL=historial_tareas.module.js.map