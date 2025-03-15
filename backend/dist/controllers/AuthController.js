"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../database/data-source");
const User_1 = require("../entities/User");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
class AuthController {
    static showFormRegister(req, res) {
        res.render('register');
    }
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, confirmPassword } = req.body;
            const u = new User_1.User();
            u.email = email;
            u.password = password;
            u.isActive = true;
            // use DataMaper
            yield userRepository.save(u);
            res.end("Register success");
        });
    }
}
exports.default = AuthController;
