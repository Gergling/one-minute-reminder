import { CaseValues } from "../types";

export type SimpleMockModel = {
  explicit: 'a' | 'b';
  numeric: number;
};

export const simpleMockModel: SimpleMockModel = {
  explicit: 'a',
  numeric: 0,
};

export const simpleMockModelCaseValues: CaseValues<SimpleMockModel> = {
  explicit: ['a', 'b'],
  numeric: [0, 1],
};
