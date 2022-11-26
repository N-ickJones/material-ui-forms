"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHandler = void 0;
var __1 = require("..");
var FormHandler = /** @class */ (function () {
    function FormHandler(args) {
        var _this = this;
        this.uuid = Number.MAX_SAFE_INTEGER;
        this.load = function (local, data) { return __awaiter(_this, void 0, void 0, function () {
            var forms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(local && data)) return [3 /*break*/, 1];
                        this.setState(data);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.controller.getAll()];
                    case 2:
                        forms = _a.sent();
                        if (!forms)
                            return [2 /*return*/, false];
                        this.setState(forms);
                        _a.label = 3;
                    case 3: return [2 /*return*/, true];
                }
            });
        }); };
        this.addNew = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                this.uuid -= 1;
                //@ts-ignore
                this.setState(__spreadArray(__spreadArray([], this.forms, true), [(_a = {}, _a[this.key] = this.uuid, _a)], false));
                return [2 /*return*/];
            });
        }); };
        this.delete = function (index) { return __awaiter(_this, void 0, void 0, function () {
            var objectId, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectId = this.forms[index][this.key];
                        if (!(objectId !== undefined && (0, __1.isValidId)(objectId))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.controller.delete(objectId)];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2:
                        setTimeout(function () {
                            //@ts-ignore
                            _this.setState(_this.forms.filter(function (item) { return item[_this.key] !== objectId; }));
                        });
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.submit = function () { return __awaiter(_this, void 0, void 0, function () {
            var success;
            var _this = this;
            return __generator(this, function (_a) {
                success = true;
                this.forms.forEach(function (object, index) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(object[this.key] !== undefined && (0, __1.isValidId)(object[this.key]))) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.update(object[this.key], object)];
                            case 1:
                                //@ts-ignore
                                if (!(_a.sent())) {
                                    success = false;
                                }
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.create(index, object)];
                            case 3:
                                if (!(_a.sent())) {
                                    success = false;
                                }
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, success];
            });
        }); };
        this.create = function (index, object) { return __awaiter(_this, void 0, void 0, function () {
            var response, t;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.controller.create(__assign(__assign({}, object), (_a = {}, _a[this.key] = undefined, _a)))];
                    case 1:
                        response = _b.sent();
                        if (response) {
                            t = this.forms;
                            t[index] = response;
                            this.setState([]);
                            this.setState(t);
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        }); };
        this.update = function (id, object) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.update(id, object)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        this.saveChanges = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.formsState(__spreadArray([], this.forms, true));
                return [2 /*return*/, true];
            });
        }); };
        this.generateKey = function (item) {
            //@ts-ignore
            return "".concat(_this.key).concat(item[_this.key]);
        };
        this.controller = args.controller;
        this.forms = args.state[0];
        this.formsState = args.state[1];
        this.key = this.controller.getKey();
    }
    FormHandler.prototype.setState = function (input) {
        this.forms = (typeof input === 'function') ? input(this.forms) : input;
        this.formsState(this.forms);
    };
    return FormHandler;
}());
exports.FormHandler = FormHandler;
