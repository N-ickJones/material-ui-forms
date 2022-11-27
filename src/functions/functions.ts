import { AES, enc } from "crypto-js";
import { ChangeEvent } from "react";
import { PaperSize, a4 } from "..";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function sleep(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function dateConvert(date?: string) {
  if (!date) return undefined;
  return date.includes('T') ? date.split('T')[0]: date;
}

export function dateConvertVerbose(date: string) {
  var rDate = new Date(date)
  return rDate.toString();
}

export const isValidId = (id: number) => {
  return id < (Number.MAX_SAFE_INTEGER - 1000);
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Obfuscation use only
 * @param plainText
 * @param key
 */
export function encrypt(plainText: string, key: string) {
  return AES.encrypt(plainText, key).toString();
}

/**
 * Obfuscation use only
 * @param cipherText
 * @param key
 */
export function decrypt(cipherText: string, key: string) {
  return AES.decrypt(cipherText, key).toString(enc.Utf8);

}

export function getOrdinal(n: number) {
  var s=["th","st","nd","rd"];
  var v= n % 100;
  return n+(s[(v-20)%10]||s[v]||s[0]);
}

export type PageBreakDiv = {
  element: HTMLDivElement,
  marginBottom: string;
}

export const getPaperHeight = (paper: PaperSize | undefined) => {
  return paper ? paper.dpi * paper.height / paper.ratio : a4.dpi * a4.height / a4.ratio;
}

export const getPaperWidth = (paper: PaperSize | undefined) => {
  return paper ? paper.dpi * paper.width / paper.ratio : a4.dpi * a4.width / a4.ratio;;
}

export const marginToPixels = (paper: PaperSize, margin: number | undefined) => {
  return paper.dpi * ( margin ? margin : 25 ) / paper.ratio ;
}

export const formIsValid = async () => {
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
      const parent = input.parentElement;
      if (parent)
        parent.classList.add('Mui-focused')
      return false;
    }

    if ((input.hasAttribute('required') && input.value === "")) {
      const inputParent = input.parentElement;
      //Outer Div
      if (inputParent) {
        inputParent.classList.add('Mui-focused', 'Mui-error')
        //Outer Label
        const componentParent = inputParent.parentElement;
        if (componentParent) {
          componentParent.firstElementChild?.classList.add('Mui-focused', 'Mui-error')
        }
      }
      return false;
    }

    }
    return true;
}

export const onChange = (setState: React.Dispatch<React.SetStateAction<any>>) => (e: ChangeEvent<HTMLInputElement | {}>, property: string, value: string | boolean) => {
  setState((current: any) => ({ ...current, [property]: value }))
}

