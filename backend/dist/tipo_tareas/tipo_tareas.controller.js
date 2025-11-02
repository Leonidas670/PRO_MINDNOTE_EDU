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
exports.TipoTareasController = void 0;
const common_1 = require("@nestjs/common");
const tipo_tareas_service_1 = require("./tipo_tareas.service");
let TipoTareasController = class TipoTareasController {
    constructor(tipoTareasService) {
        this.tipoTareasService = tipoTareasService;
    }
    create(body) {
        return this.tipoTareasService.create(body);
    }
    findAll() {
        return this.tipoTareasService.findAll();
    }
    findOne(id) {
        return this.tipoTareasService.findOne(+id);
    }
    update(id, body) {
        return {
            "exito": true,
            "mensaje": "Tipo de tarea actualizada con exito",
            "id": id,
            "data": this.tipoTareasService.update(+id, body)
        };
    }
    remove(id) {
        return this.tipoTareasService.remove(+id);
    }
};
exports.TipoTareasController = TipoTareasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TipoTareasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoTareasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoTareasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TipoTareasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoTareasController.prototype, "remove", null);
exports.TipoTareasController = TipoTareasController = __decorate([
    (0, common_1.Controller)('tipo-tareas'),
    __metadata("design:paramtypes", [tipo_tareas_service_1.TipoTareasService])
], TipoTareasController);
//# sourceMappingURL=tipo_tareas.controller.js.map