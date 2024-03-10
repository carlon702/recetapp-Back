"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterFailedError = void 0;
class RegisterFailedError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.RegisterFailedError = RegisterFailedError;
