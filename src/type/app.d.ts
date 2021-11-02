// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};

declare global {
  namespace APP {
    export interface Greeting {
      word: string;
    }
  }
}
