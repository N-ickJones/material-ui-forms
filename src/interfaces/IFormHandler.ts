export interface IFormHandler<T> {
  load(local: boolean, data?: any): Promise<boolean>;
  addNew(): Promise<void>;
  delete(index: number): Promise<boolean>
  submit() : Promise<boolean>;
  saveChanges(): Promise<boolean>;
  generateKey(item: T): string;
}