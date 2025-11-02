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
exports.TipoTareasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma/prisma.service");
let TipoTareasService = class TipoTareasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        return await this.prisma.tipoTarea.create({
            data: body
        });
    }
    async findAll() {
        return await this.prisma.tipoTarea.findMany({
            orderBy: { tipo_nombre: 'desc' }
        });
    }
    async findOne(id) {
        return await this.prisma.tipoTarea.findFirst({
            where: { tipo_id: id }
        });
    }
    async update(id, body) {
        return await this.prisma.tipoTarea.update({
            where: { tipo_id: id },
            data: body
        });
    }
    async remove(id) {
        await this.prisma.tipoTarea.delete({
            where: { tipo_id: id }
        });
        return {
            "exito": true,
            "mensaje": "Tipo de tarea eliminada con exito",
            "id": id
        };
    }
};
exports.TipoTareasService = TipoTareasService;
exports.TipoTareasService = TipoTareasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TipoTareasService);
//# sourceMappingURL=tipo_tareas.service.js.map