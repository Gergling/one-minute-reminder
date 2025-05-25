import { CaseValueIteration, CaseValues } from "../types";

export const getModel = <Model>(
  caseValues: CaseValues<Model>,
  iteration: CaseValueIteration<Model>[]
): Model => {
  return iteration.reduce((partialModel, { key, index }) => {
    return {
      ...partialModel,
      [key]: caseValues[key][index],
    };
  }, {} as Model);
};
