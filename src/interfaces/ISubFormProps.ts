import { ChangeEvent } from "react";

export interface ISubFormProps<T> {
  item: T;
  locked?: boolean;
  listIndex: number;
  printMode?: boolean;
  handleChangeList: (listProperty: string, listIndex: number) => (e: ChangeEvent<HTMLInputElement | {}>, property: string, value: string | boolean) => Promise<void>;
  handleDeleteList: (listProperty: string, listIndex: number, id?: number) => () => Promise<void>;
  handlePrintRef?: (index: number) => (el: HTMLDivElement | null) => void;
}
