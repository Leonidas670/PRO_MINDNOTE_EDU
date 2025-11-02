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
exports.PrioridadTareasController = void 0;
const common_1 = require("@nestjs/common");
const prioridad_tareas_service_1 = require("./prioridad_tareas.service");
let PrioridadTareasController = class PrioridadTareasController {
    constructor(prioridadTareasService) {
        this.prioridadTareasService = prioridadTareasService;
    }
    create(body) {
        return this.prioridadTareasService.create(body);
    }
    findAll() {
        return this.prioridadTareasService.findAll();
    }
    findOne(id) {
        return this.prioridadTareasService.findOne(+id);
    }
    update(id, body) {
        return {
            "exito": true,
            "mensaje": "Prioridad de tarea actualizada exitosamente",
            "id": id,
            "data": this.prioridadTareasService.update(+id, body)
        };
    }
    remove(id) {
        return this.prioridadTareasService.remove(+id);
    }
};
exports.PrioridadTareasController = PrioridadTareasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrioridadTareasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrioridadTareasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrioridadTareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PrioridadTareasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrioridadTareasController.prototype, "remove", null);
exports.PrioridadTareasController = PrioridadTareasController = __decorate([
    (0, common_1.Controller)('prioridad-tareas'),
    __metadata("design:paramtypes", [prioridad_tareas_service_1.PrioridadTareasService])
], PrioridadTareasController);
//# sourceMappingURL=prioridad_tareas.controller.js.map