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
exports.NotificacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/prisma/prisma.service");
let NotificacionesService = class NotificacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        return await this.prisma.notificacion.create({
            data: body
        });
    }
    async findAll() {
        return await this.prisma.notificacion.findMany({
            orderBy: { notificacion_id: 'desc' }
        });
    }
    async findOne(id) {
        return await this.prisma.notificacion.findFirst({
            where: { notificacion_id: id }
        });
    }
    async update(id, body) {
        return await this.prisma.notificacion.update({
            where: { notificacion_id: id },
            data: body
        });
    }
    async remove(id) {
        await this.prisma.notificacion.delete({
            where: { notificacion_id: id }
        });
        return {
            "exito": true,
            "mensaje": "Notificación eliminada exitosamente",
            "id": id
        };
    }
};
exports.NotificacionesService = NotificacionesService;
exports.NotificacionesService = NotificacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificacionesService);
//# sourceMappingURL=notificaciones.service.js.map