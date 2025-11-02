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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialTareasController = void 0;
const common_1 = require("@nestjs/common");
const historial_tareas_service_1 = require("./historial_tareas.service");
let HistorialTareasController = class HistorialTareasController {
    constructor(historialTareasService) {
        this.historialTareasService = historialTareasService;
    }
    create(body) {
        return this.historialTareasService.create(body);
    }
    findAll() {
        return this.historialTareasService.findAll();
    }
    findOne(id) {
        return this.historialTareasService.findOne(+id);
    }
    update(id, body) {
        return {
            "exito": true,
            "mensaje": "Historial de tarea actualizado exitosamente",
            "id": id,
            "data": this.historialTareasService.update(+id, body)
        };
    }
    remove(id) {
        return this.historialTareasService.remove(+id);
    }
};
exports.HistorialTareasController = HistorialTareasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HistorialTareasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistorialTareasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialTareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HistorialTareasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialTareasController.prototype, "remove", null);
exports.HistorialTareasController = HistorialTareasController = __decorate([
    (0, common_1.Controller)('historial-tareas'),
    __metadata("design:paramtypes", [historial_tareas_service_1.HistorialTareasService])
], HistorialTareasController);
//# sourceMappingURL=historial_tareas.controller.js.map