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
exports.TareasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma/prisma.service");
let TareasService = class TareasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        const [hours, minutes] = body.tarea_hora.split(":").map(Number);
        const hora = new Date();
        hora.setHours(hours, minutes, 0, 0);
        console.log(body);
        return await this.prisma.tarea.create({
            data: {
                "tarea_titulo": body.tarea_titulo,
                "tarea_descripcion": body.tarea_descripcion,
                "tarea_fechaLimite": new Date(body.tarea_fechaLimite),
                "tarea_hora": hora,
                estado: {
                    connect: { estado_id: parseInt(body.estado_id) },
                },
                prioridad: {
                    connect: { prioridad_id: Number(body.prioridad_id) },
                },
                tipo: {
                    connect: { tipo_id: Number(body.tipo_id) },
                },
                usuario: {
                    connect: { usuario_id: Number(body.usuario_id) },
                },
            }
        });
        console.log(body);
    }
    async findAll() {
        return await this.prisma.tarea.findMany({
            orderBy: { tarea_id: 'desc' }
        });
    }
    async findOne(id) {
        return await this.prisma.tarea.findFirst({
            where: { tarea_id: id }
        });
    }
    async update(id, body) {
        return await this.prisma.tarea.update({
            where: { tarea_id: id },
            data: body
        });
    }
    async remove(id) {
        await this.prisma.tarea.delete({
            where: { tarea_id: id }
        });
        return {
            "exito": true,
            "mensaje": "Tarea eliminada con exito",
            "id": id,
        };
    }
};
exports.TareasService = TareasService;
exports.TareasService = TareasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TareasService);
//# sourceMappingURL=tareas.service.js.map