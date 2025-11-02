"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoTareasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma/prisma.service");
let EstadoTareasService = class EstadoTareasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        return await this.prisma.estadoTarea.create({
            data: body
        });
    }
    async findAll() {
        return await this.prisma.estadoTarea.findMany({
            orderBy: { estado_id: 'desc' }
        });
    }
    async findOne(id) {
        return await this.prisma.estadoTarea.findFirst({
            where: { estado_id: id }
        });
    }
    async update(id, body) {
        return await this.prisma.estadoTarea.update({
            where: { estado_id: id },
            data: body
        });
    }
    async remove(id) {
        await this.prisma.estadoTarea.delete({
            where: { estado_id: id }
        });
        return {
            "exito": true,
            "mensaje": "Estado de tarea eliminado exitosamente",
            "id": id
        };
    }
};
exports.EstadoTareasService = EstadoTareasService;
exports.EstadoTareasService = EstadoTareasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EstadoTareasService);
//# sourceMappingURL=estado_tareas.service.js.map