import { IFormHandler, FormArgs, IRepoController, isValidId } from "..";

export class FormHandler<T> implements IFormHandler<T> {
  constructor(args: FormArgs<T>) {
    this.controller = args.controller;
    this.forms = args.state[0];
    this.formsState = args.state[1];
    this.key = this.controller.getKey();
  }
  public forms: T[];
  private uuid = Number.MAX_SAFE_INTEGER;
  private formsState: React.Dispatch<React.SetStateAction<T[]>>;
  private key: string;
  private controller: IRepoController<T>

  public load = async (local: boolean, data?: any) => {
    if (local && data) {
      this.setState(data);
    }
    else {
      const forms = await this.controller.getAll();
      if (!forms) return false;
      this.setState(forms);
    }
    return true;
  }

  public addNew = async () => {
    this.uuid -= 1;
    //@ts-ignore
    this.setState([...this.forms, { [this.key]: this.uuid } ]);
  }

  public delete = async (index: number): Promise<boolean> => {
    //@ts-ignore
    const objectId = this.forms[index][this.key];
    if (objectId !== undefined && isValidId(objectId)) {
      const response = await this.controller.delete(objectId);
      if (!response) { return false; }
    }
    setTimeout(() => {
      //@ts-ignore
      this.setState(this.forms.filter((item) => item[this.key]  !== objectId));
    })
    return true;
  }

  public submit = async (): Promise<boolean> => {
    let success = true;
    this.forms.forEach(async (object: T, index: number) => {
      //@ts-ignore
      if (object[this.key] !== undefined && isValidId(object[this.key])) {
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
  }

  private create = async (index: number, object: T): Promise<boolean> => {
    const response = await this.controller.create({ ...object, [this.key]: undefined });
    if (response) {
      //Flush Forms temp key for real key
      const t = this.forms;
      t[index] = response
      this.setState([])
      this.setState(t);
      return true;
    }
    return false;
  }

  private update = async (id: number, object: T): Promise<boolean> => {
    const response = await this.controller.update(id, object);
    return response;
  }

  public saveChanges = async () => {
    this.formsState([...this.forms]);
    return true;
  }

  public generateKey = (item: T) => {
    //@ts-ignore
    return `${this.key}${item[this.key]}`;
  }

  private setState(input: ((value: T[]) => T[]) | T[]) {
    this.forms = (typeof input === 'function') ? input(this.forms) : input;
    this.formsState(this.forms)
  }

}
