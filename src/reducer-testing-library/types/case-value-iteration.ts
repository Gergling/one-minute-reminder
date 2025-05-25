export type CaseValueIteration<Model> = {
  key: keyof Model;
  index: number;
  length: number;
};
