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
exports.EstadoTareasController = void 0;
const common_1 = require("@nestjs/common");
const estado_tareas_service_1 = require("./estado_tareas.service");
const create_estado_tarea_dto_1 = require("./dto/create-estado_tarea.dto");
const update_estado_tarea_dto_1 = require("./dto/update-estado_tarea.dto");
let EstadoTareasController = class EstadoTareasController {
    constructor(estadoTareasService) {
        this.estadoTareasService = estadoTareasService;
    }
    create(createEstadoTareaDto) {
        return this.estadoTareasService.create(createEstadoTareaDto);
    }
    findAll() {
        return this.estadoTareasService.findAll();
    }
    findOne(id) {
        return this.estadoTareasService.findOne(+id);
    }
    update(id, updateEstadoTareaDto) {
        return this.estadoTareasService.update(+id, updateEstadoTareaDto);
    }
    remove(id) {
        return this.estadoTareasService.remove(+id);
    }
};
exports.EstadoTareasController = EstadoTareasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estado_tarea_dto_1.CreateEstadoTareaDto]),
    __metadata("design:returntype", void 0)
], EstadoTareasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstadoTareasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstadoTareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estado_tarea_dto_1.UpdateEstadoTareaDto]),
    __metadata("design:returntype", void 0)
], EstadoTareasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstadoTareasController.prototype, "remove", null);
exports.EstadoTareasController = EstadoTareasController = __decorate([
    (0, common_1.Controller)('estado-tareas'),
    __metadata("design:paramtypes", [estado_tareas_service_1.EstadoTareasService])
], EstadoTareasController);
//# sourceMappingURL=estado_tareas.controller.js.map