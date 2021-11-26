"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHandler = void 0;
const functions_1 = require("../functions/functions");
class FormHandler {
    constructor(args) {
        this.uuid = Number.MAX_SAFE_INTEGER;
        this.load = async (local, data) => {
            if (local && data) {
                this.setState(data);
            }
            else {
                const forms = await this.controller.getAll();
                if (!forms)
                    return false;
                this.setState(forms);
            }
            return true;
        };
        this.addNew = async () => {
            this.uuid -= 1;
            //@ts-ignore
            this.setState([...this.forms, { [this.key]: this.uuid }]);
        };
        this.delete = async (index) => {
            //@ts-ignore
            const objectId = this.forms[index][this.key];
            if (objectId !== undefined && functions_1.isValidId(objectId)) {
                const response = await this.controller.delete(objectId);
                if (!response) {
                    return false;
                }
            }
            setTimeout(() => {
                //@ts-ignore
                this.setState(this.forms.filter((item) => item[this.key] !== objectId));
            });
            return true;
        };
        this.submit = async () => {
            let success = true;
            this.forms.forEach(async (object, index) => {
                //@ts-ignore
                if (object[this.key] !== undefined && functions_1.isValidId(object[this.key])) {
                    //@ts-ignore
                    if (!(await this.update(object[this.key], object))) {
                        success = false;
                    }
                }
                else {
                    if (!(await this.create(index, object))) {
                        success = false;
                    }
                }
            });
            return success;
        };
        this.create = async (index, object) => {
            const response = await this.controller.create(Object.assign(Object.assign({}, object), { [this.key]: undefined }));
            if (response) {
                //Flush Forms temp key for real key
                const t = this.forms;
                t[index] = response;
                this.setState([]);
                this.setState(t);
                return true;
            }
            return false;
        };
        this.update = async (id, object) => {
            const response = await this.controller.update(id, object);
            return response;
        };
        this.saveChanges = async () => {
            this.formsState([...this.forms]);
            return true;
        };
        this.generateKey = (item) => {
            //@ts-ignore
            return `${this.key}${item[this.key]}`;
        };
        this.controller = args.controller;
        this.forms = args.state[0];
        this.formsState = args.state[1];
        this.key = this.controller.getKey();
    }
    setState(input) {
        this.forms = (typeof input === 'function') ? input(this.forms) : input;
        this.formsState(this.forms);
    }
}
exports.FormHandler = FormHandler;
//# sourceMappingURL=FormHandler.js.map