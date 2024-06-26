"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fsUtil_1 = require("../fsUtil");
class FsSwaggerProvider {
    provide(settings, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            if (settings.swaggerFile) {
                logger.info(`Reading swagger definitions from ${settings.swaggerFile}`);
                const data = yield fsUtil_1.readFile(settings.swaggerFile, "utf8");
                return JSON.parse(data);
            }
            else {
                throw new Error("Filename to fetch swagger definition is not provided");
            }
        });
    }
}
exports.FsSwaggerProvider = FsSwaggerProvider;
