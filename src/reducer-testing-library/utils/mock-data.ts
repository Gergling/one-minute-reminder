import { CaseValues } from "../types";

export type SimpleMockModel = {
  explicit: 'a' | 'b';
  numeric: number;
};

export const simpleMockModelCaseValues: CaseValues<SimpleMockModel> = {
  explicit: ['a', 'b'],
  numeric: [0, 1],
};

export const mockActionPrimitive = 'decrement';
