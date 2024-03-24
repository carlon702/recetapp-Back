"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const RecipeRoutes_1 = __importDefault(require("./RecipeRoutes"));
function appRoutes(app) {
    app.get('/status', (req, res) => {
        res.status(200).json({ message: "Si ven esto los quiero" });
    });
    app.use('/auth', AuthRoutes_1.default);
    app.use('/recipes', RecipeRoutes_1.default);
}
exports.appRoutes = appRoutes;
